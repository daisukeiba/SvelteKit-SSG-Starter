<script lang="ts">
  import { PUBLIC_BASE_URL } from '$env/static/public';
  import { page } from '$app/stores';
  import {
    removeHTMLTags,
    truncateString
  } from '$lib/scripts/common';
  import type {
    MetaData,
    PostData,
    ShareData
  } from '$lib/scripts/types';
  import TheMeta from '$lib/TheMeta.svelte';
  import TheShare from '$lib/TheShare.svelte';

  type Data = {
    postData: PostData;
  };
  export let data: Data;

  const {
    title,
    content
  } = data.postData;

  // タグを除去して100文字以内の文字列を設定
  const descriptionLimit = 100;
  const description: string = truncateString(removeHTMLTags(content), descriptionLimit);

  const metaData: MetaData = {
    title,
    description
  };

  const shareData: ShareData = {
    url: PUBLIC_BASE_URL + $page.url.pathname,
    text: 'ブログ詳細ページのシェアテキスト',
  };

</script>

<TheMeta { metaData }/>

<h1>{ title }</h1>
<div>{@html content }</div>

{#if data.postData.prev}
<p><a
  data-sveltekit-reload
  href="../{ data.postData.prev }"
>前の記事</a></p>
{/if}
{#if data.postData.next}
<p><a
  data-sveltekit-reload
  href="../{ data.postData.next }"
>次の記事</a></p>
{/if}

<TheShare { shareData } />