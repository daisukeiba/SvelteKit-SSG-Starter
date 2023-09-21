<script lang="ts">
  import type {
    MetaData,
    SummariesData
  } from '$lib/scripts/types';
  import TheMeta from '$lib/TheMeta.svelte';

  type Data = {
    summariesData: SummariesData[];
  };
  export let data: Data;

  const metaData: MetaData = {
    title: 'ページタイトル blog',
    description: 'ブログ一覧ページの概要'
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