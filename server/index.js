import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import reviewsRouter from './routes/reviews.js';
import contactsRouter from './routes/contacts.js';
import adminRouter from './routes/admin.js';

const app = express();

// ── Middleware ──────────────────────────────────
app.use(express.json());

const allowedOrigins = process.env.FRONTEND_URL
  ? [process.env.FRONTEND_URL]
  : ['http://localhost:5173', 'http://localhost:4173'];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      callback(new Error(`CORS: origin "${origin}" not allowed`));
    },
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  })
);

// ── Routes ──────────────────────────────────────
app.use('/api/reviews', reviewsRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/admin', adminRouter);

// Health check for Render uptime monitoring
app.get('/health', (_req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));

// 404 catch-all
app.use((_req, res) => res.status(404).json({ error: 'Route not found' }));

// ── Start ────────────────────────────────────────
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Trio Craft API listening on port ${PORT}`);
  console.log(`   Allowed origins: ${allowedOrigins.join(', ')}`);
});

