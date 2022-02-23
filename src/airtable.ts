import 'https://deno.land/x/dotenv/load.ts';
import { Airtable } from 'https://deno.land/x/airtable/mod.ts';

const env = Deno.env.toObject();

export const airtable = new Airtable({
  apiKey: env.AIRTABLE_API_KEY,
  baseId: env.AIRTABLE_BASE_ID,
  tableName: 'Resources',
});
