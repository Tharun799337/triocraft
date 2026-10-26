import { Router } from 'express';
import sql from '../db.js';

const router = Router();

const ADMIN_USER = process.env.ADMIN_USERNAME || 'triocraft_admin';
const ADMIN_PASS = process.env.ADMIN_PASSWORD || 'TrioCraft@2024!';

// Simple token store (in-memory — fine for single admin use)
const validTokens = new Set();

function requireAuth(req, res, next) {
  const token = req.headers['x-admin-token'];
  if (!token || !validTokens.has(token)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

// POST /api/admin/login
router.post('/login', (req, res) => {
  const { username, password } = req.body ?? {};
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = `tc_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    validTokens.add(token);
    return res.json({ token });
  }
  return res.status(401).json({ error: 'Invalid credentials' });
});

// POST /api/admin/logout
router.post('/logout', (req, res) => {
  validTokens.delete(req.headers['x-admin-token']);
  res.json({ ok: true });
});

// GET /api/admin/reviews — all reviews (including pending)
router.get('/reviews', requireAuth, async (_req, res) => {
  try {
    const rows = await sql`SELECT * FROM reviews ORDER BY created_at DESC`;
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH /api/admin/reviews/:id — approve or reject
router.patch('/reviews/:id', requireAuth, async (req, res) => {
  const { approved } = req.body;
  try {
    await sql`UPDATE reviews SET approved = ${approved} WHERE id = ${req.params.id}`;
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/admin/reviews/:id
router.delete('/reviews/:id', requireAuth, async (req, res) => {
  try {
    await sql`DELETE FROM reviews WHERE id = ${req.params.id}`;
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/admin/contacts — all contact requests
router.get('/contacts', requireAuth, async (_req, res) => {
  try {
    const rows = await sql`SELECT * FROM contacts ORDER BY created_at DESC`;
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/admin/contacts/:id
router.delete('/contacts/:id', requireAuth, async (req, res) => {
  try {
    await sql`DELETE FROM contacts WHERE id = ${req.params.id}`;
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export { requireAuth };
export default router;
