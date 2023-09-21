<script lang="ts">
  import { PUBLIC_BASE_URL } from '$env/static/public';
  import { page } from '$app/stores';
  import type {
    MetaData,
    ShareData
  } from '$lib/scripts/types';
  import TheMeta from '$lib/TheMeta.svelte';
  import TheShare from '$lib/TheShare.svelte';
  // console.log({PUBLIC_BASE_URL});

  const metaData: MetaData = {
    title: 'ページタイトル ホーム',
    ogType: 'website'
  };

  const shareData: ShareData = {
    url: PUBLIC_BASE_URL + $page.url.pathname,
    text: 'TOPページのシェアテキスト',
  }

</script>

<TheMeta { metaData }/>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<TheShare { shareData } />