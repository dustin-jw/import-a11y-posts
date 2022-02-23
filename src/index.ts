import { fetchLatestPosts } from './fetch-latest-posts.ts';
import { doesResourceExist } from './does-resource-exist.ts';
import { createRecord } from './create-record.ts';

const importLatestPosts = async () => {
  const posts = await fetchLatestPosts();
  if (!posts.length) {
    // eslint-disable-next-line no-console
    console.log('Did not find any new accessibility resources.');
    return;
  }

  posts.forEach(async (post) => {
    const exists = await doesResourceExist(post.link);
    if (exists) {
      // eslint-disable-next-line no-console
      console.log(`Did not add a record for ${post.title}, since one already existed.`);
      return;
    }

    await createRecord(post);
  });
};

importLatestPosts();
