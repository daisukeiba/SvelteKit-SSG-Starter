import type { SummariesData } from '../../lib/scripts/types';
import { posts } from './data.js';

export const load = async(): Promise<{ summariesData: SummariesData[] }> => {
  const summariesData = await posts.map((post) => ({
    slug: post.slug,
    title: post.title
  }));

  return {
    summariesData
  };
}