import { Router } from 'express';
import sql from '../db.js';

const router = Router();

// POST /api/contacts — save contact form submission
router.post('/', async (req, res) => {
  const { name, email, phone = '', service = 'General', message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email and message are required' });
  }

  try {
    await sql`
      INSERT INTO contacts (name, email, phone, service, message)
      VALUES (${name}, ${email}, ${phone}, ${service}, ${message})
    `;
    return res.status(201).json({ message: 'Contact request received! We will reach out within 2 hours.' });
  } catch (err) {
    console.error('[POST /api/contacts] DB error:', err.message);
    return res.status(500).json({ error: 'Failed to save contact request' });
  }
});

export default router;
