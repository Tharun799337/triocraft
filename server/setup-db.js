import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

console.log('Creating reviews table...');
await sql`
  CREATE TABLE IF NOT EXISTS reviews (
    id          SERIAL PRIMARY KEY,
    name        TEXT        NOT NULL,
    role        TEXT        NOT NULL DEFAULT '',
    quote       TEXT        NOT NULL,
    rating      INT         NOT NULL DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
    tag         TEXT        NOT NULL DEFAULT 'General',
    approved    BOOLEAN     NOT NULL DEFAULT false,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )
`;
console.log('✅ Table created (or already exists)');

console.log('Seeding real reviews...');
await sql`
  INSERT INTO reviews (name, role, quote, rating, tag, approved)
  VALUES
  (
    'Dr. Rajesh Vardhan',
    'Managing Medical Director, City Care Multi-Specialty Hospital',
    'Trio Craft transformed our entire hospital intake. Their hospital website and real-time AI triage assistant dropped patient wait times by 45% while handling 2,400+ monthly online appointments flawlessly.',
    5, 'Healthcare & AI Chatbot', true
  ),
  (
    'Venkata Ramana Rao',
    'General Secretary, Central Utsav Committee',
    'Our Vinayaka Chavithi Maha Utsav portal handled over 50,000 simultaneous devotees during evening aarti. The live laddu auction with real-time WebSocket bidding generated record community participation.',
    5, 'Festival & Live Auction', true
  ),
  (
    'Karthik Subramanian',
    'Founder & CEO, CloudScale Systems',
    'The Revenue Tracker platform gave us instant visibility into our MRR, churn cohorts, and cash flow. Their automated dunning workflow recovered over $14,000 in failed credit card renewals in month one.',
    5, 'FinTech & Revenue Engine', true
  ),
  (
    'Sai Preetham',
    'Verified Couple Client',
    'I wanted to plan an unforgettable anniversary surprise for my fiancé. The personalized romantic timeline, custom background song, and midnight balloon reveal brought tears of joy to her eyes. Truly priceless.',
    5, 'Couple Surprise Portal', true
  )
  ON CONFLICT DO NOTHING
`;
console.log('✅ Reviews seeded!');

const rows = await sql`SELECT id, name, tag, approved FROM reviews ORDER BY id`;
console.log('\n📋 Reviews in DB:');
rows.forEach(r => console.log(`  [${r.id}] ${r.name} — ${r.tag} (approved: ${r.approved})`));
