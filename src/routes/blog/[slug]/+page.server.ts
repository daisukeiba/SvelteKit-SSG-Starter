import { error } from '@sveltejs/kit';
import type { PostData } from '../../../lib/scripts/types';
import { posts } from '../data.js';

export const load = async({
  params
}: {
  params: {
    slug: string
  }
}): Promise<{ postData: PostData }> => {
  const index = posts.findIndex((post) => post.slug === params.slug);
  const postData = posts[index];

	if (!postData) throw error(404);

  // 前後に記事があれば post に slug を追加
  postData.prev = index > 0 ? posts[index - 1].slug : '';
  postData.next = index < posts.length - 1 ? posts[index + 1].slug : '';

	return {
		postData
	};
}