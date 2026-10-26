import { Router } from 'express';
import sql from '../db.js';

const router = Router();

// ──────────────────────────────────────────────
// GET /api/reviews
// Returns all approved reviews ordered by created_at
// ──────────────────────────────────────────────
router.get('/', async (_req, res) => {
  try {
    const rows = await sql`
      SELECT id, name, role, quote, rating, tag
      FROM reviews
      WHERE approved = true
      ORDER BY created_at ASC
    `;
    res.setHeader('Cache-Control', 'public, s-maxage=60, max-age=60');
    return res.status(200).json(rows);
  } catch (err) {
    console.error('[GET /api/reviews] DB error:', err.message);
    return res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// ──────────────────────────────────────────────
// POST /api/reviews
// Submit a new review — saved as approved = false
// (you manually approve it in the Neon console)
// ──────────────────────────────────────────────
router.post('/', async (req, res) => {
  const { name, role = '', quote, rating = 5, tag = 'General' } = req.body ?? {};

  if (!name || !quote) {
    return res.status(400).json({ error: 'name and quote are required' });
  }
  if (typeof rating !== 'number' || rating < 1 || rating > 5) {
    return res.status(400).json({ error: 'rating must be a number between 1 and 5' });
  }

  try {
    await sql`
      INSERT INTO reviews (name, role, quote, rating, tag, approved)
      VALUES (${name}, ${role}, ${quote}, ${rating}, ${tag}, false)
    `;
    return res.status(201).json({ message: 'Review submitted — pending approval. Thank you!' });
  } catch (err) {
    console.error('[POST /api/reviews] DB error:', err.message);
    return res.status(500).json({ error: 'Failed to submit review' });
  }
});

export default router;
