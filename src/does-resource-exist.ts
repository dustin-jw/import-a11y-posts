import { airtable } from './airtable.ts';

export const doesResourceExist = async (link: string): Promise<boolean> => {
  const { records } = await airtable.select({
    maxRecords: 1,
    filterByFormula: `{URL / Google Drive Location} = '${link}'`,
  });

  return !!records.length;
};
