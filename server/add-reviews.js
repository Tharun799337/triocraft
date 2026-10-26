import dotenv from 'dotenv';
dotenv.config({ path: './server/.env' });
dotenv.config();
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

console.log('Inserting additional client stories...');

const newReviews = [
  {
    name: 'Dr. Ananya Sharma',
    role: 'Chief Medical Officer, CarePlus Health Network',
    quote: 'The patient queue management and real-time WhatsApp triage bot built by Trio Craft cut our outpatient wait times by 60% while handling 3,500+ monthly OPD bookings effortlessly.',
    rating: 5,
    tag: 'Hospital & HMS Systems',
    approved: true
  },
  {
    name: 'Rohit Reddy',
    role: 'Co-Founder, Hyderabadi Spice Kitchen',
    quote: 'Trio Craft engineered our custom multi-outlet online ordering platform and loyalty engine. Our direct orders surged by 220% in 60 days, significantly reducing aggregator commissions.',
    rating: 5,
    tag: 'Website & App Development',
    approved: true
  },
  {
    name: 'Meera Nambiar',
    role: 'Creative Director, Silk & Saffron Couture',
    quote: 'Their team built a high-fashion bespoke e-commerce experience with interactive 3D product previews. International bridal inquiries jumped 300% within the first month.',
    rating: 5,
    tag: 'Digital Marketing & SEO',
    approved: true
  },
  {
    name: 'Arvind Chawla',
    role: 'Head of Product, FinLedger Technologies',
    quote: 'The SaaS revenue dashboard and dunning recovery pipelines built by Trio Craft gave our enterprise customers real-time auditability. Onboarding cycle dropped from 3 weeks to 4 days.',
    rating: 5,
    tag: 'FinTech & Revenue Engine',
    approved: true
  },
  {
    name: 'Deepa Iyer',
    role: 'Convenor, Navratri Dandiya Mahotsav',
    quote: 'Managing 25,000+ pass reservations and fast QR-code gate verifications was 100% crash-free thanks to Trio Craft high-concurrency event ticketing engine.',
    rating: 5,
    tag: 'Festival & Live Auction',
    approved: true
  },
  {
    name: 'Venkata Ramana Rao',
    role: 'General Secretary, Central Utsav Committee',
    quote: 'Our Vinayaka Chavithi Maha Utsav portal handled over 50,000 simultaneous devotees during evening aarti. The live laddu auction with real-time WebSocket bidding generated record community participation.',
    rating: 5,
    tag: 'Festival & Live Auction',
    approved: true
  }
];

for (const rev of newReviews) {
  // Check if already exists by name
  const existing = await sql`SELECT id FROM reviews WHERE name = ${rev.name} LIMIT 1`;
  if (existing.length === 0) {
    await sql`
      INSERT INTO reviews (name, role, quote, rating, tag, approved)
      VALUES (${rev.name}, ${rev.role}, ${rev.quote}, ${rev.rating}, ${rev.tag}, ${rev.approved})
    `;
    console.log(`+ Added review from: ${rev.name}`);
  } else {
    await sql`
      UPDATE reviews
      SET approved = true, quote = ${rev.quote}, role = ${rev.role}, tag = ${rev.tag}
      WHERE id = ${existing[0].id}
    `;
    console.log(`* Updated and approved review for: ${rev.name}`);
  }
}

const all = await sql`SELECT id, name, tag, approved FROM reviews ORDER BY id`;
console.log(`\n Total reviews in DB now: ${all.length}`);
all.forEach(r => console.log(`  [${r.id}] ${r.name} (${r.tag}) — approved: ${r.approved}`));
