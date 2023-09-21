<script lang="ts">
  import { PUBLIC_BASE_URL } from '$env/static/public';
  import { page } from '$app/stores';
  import type {
    MetaData,
    ShareData,
    SummariesData
  } from '$lib/scripts/types';
  import TheMeta from '$lib/TheMeta.svelte';
  import TheShare from '$lib/TheShare.svelte';

  type Data = {
    summariesData: SummariesData[];
  };
  export let data: Data;

  const metaData: MetaData = {
    title: 'ページタイトル blog',
    description: 'ブログ一覧ページの概要'
  };

  const shareData: ShareData = {
    url: PUBLIC_BASE_URL + $page.url.pathname,
    text: 'ブログ一覧ページのシェアテキスト',
  };

</script>

<TheMeta { metaData }/>

<h1>blog</h1>

<ul>
  {#each data.summariesData as {
    slug,
    title
  }}
    <li><a href="/blog/{ slug }">{ title }</a></li>
  {/each}
</ul>

<TheShare { shareData } />