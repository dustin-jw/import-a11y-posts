import { parse } from 'https://deno.land/x/xml/mod.ts';

interface Post {
  title: string
  link: string
  'dc:subject'?: string
}

interface Channel {
  item: [Post]
}

interface RSS {
  channel: Channel
}

interface Feed {
  rss: RSS
}

export const fetchLatestPosts = async (): Promise<Post[]> => {
  const feed = await fetch('https://sparkbox.com/foundry/feed');
  const feedText = await feed.text();
  const feedData: Feed = parse(feedText) as unknown as Feed;

  return feedData.rss.channel.item
    .filter((post) => post['dc:subject']?.includes('Accessibility'))
    .map((post) => ({
      title: post.title,
      link: post.link,
    }));
};
