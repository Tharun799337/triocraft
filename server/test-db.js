import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

try {
  const result = await sql`SELECT NOW() as now`;
  console.log('✅ Neon DB connected:', result[0].now);
} catch (err) {
  console.error('❌ DB error:', err.message);
}
