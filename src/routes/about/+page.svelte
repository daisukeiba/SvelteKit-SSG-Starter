<script lang="ts">
  import type { MetaData } from '$lib/scripts/types';
  import TheMeta from '$lib/TheMeta.svelte';

  const metaData: MetaData = {
    title: 'ページタイトル about',
    description: 'アバウトページの概要'
  };

</script>

<TheMeta { metaData }/>

<h1>about</h1>
