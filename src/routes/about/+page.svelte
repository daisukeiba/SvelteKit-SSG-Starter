<script lang="ts">
  import { PUBLIC_BASE_URL } from '$env/static/public';
  import { page } from '$app/stores';
  import type {
    MetaData,
    ShareData
  } from '$lib/scripts/types';
  import TheMeta from '$lib/TheMeta.svelte';
  import TheShare from '$lib/TheShare.svelte';

  const metaData: MetaData = {
    title: 'ページタイトル about',
    description: 'アバウトページの概要'
  };

  const shareData: ShareData = {
    url: PUBLIC_BASE_URL + $page.url.pathname,
    text: 'アバウトページのシェアテキスト',
  };

</script>

<TheMeta { metaData }/>

<h1>about</h1>

<TheShare { shareData } />