import { airtable } from './airtable.ts';

interface Post {
  title: string
  link: string
}

export const createRecord = async (post: Post): Promise<void> => {
  await airtable.create({
    Name: post.title,
    'URL / Google Drive Location': post.link,
    Category: [],
    'Resource Type': ['Article (Foundry)'],
    Topic: [],
    Keywords: [],
  });

  // eslint-disable-next-line no-console
  console.log(`Added a record for ${post.title}.`);
};
