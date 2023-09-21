<script lang="ts">
  // import { PUBLIC_BASE_URL } from '$env/static/public';
  import type { MetaData } from '$lib/scripts/types';
  import TheMeta from '$lib/TheMeta.svelte';
  // console.log({PUBLIC_BASE_URL});

  const metaData: MetaData = {
    title: 'ページタイトル ホーム',
    ogType: 'website'
  };

</script>

<TheMeta { metaData }/>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
