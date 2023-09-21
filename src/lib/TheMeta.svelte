<script lang="ts">
  import { PUBLIC_BASE_URL } from '$env/static/public';
  import { page } from '$app/stores';
  import type { MetaData } from './scripts/types';

  export let metaData: MetaData;
  const title = metaData.title;
  const titleSuffix = 'サイトの名前';
  const titleWithSuffix = titleSuffix === title
    ? title
    : `${ title } | ${ titleSuffix }`;
  const description = metaData.description
    ? metaData.description
    : 'デフォルトの概要';
  const image = metaData.image
    ? metaData.image
    : `${PUBLIC_BASE_URL}/assets/images/ogp.png`;
  const ogType = metaData.ogType
    ? metaData.ogType
    : 'article';
  const url = PUBLIC_BASE_URL + $page.url.pathname;
  const locale = 'ja_JP';
  // const appId = '1234567890';
</script>

<svelte:head>
  <!-- Search engines -->
  <title>{titleWithSuffix}</title>
  <meta name="title" content={ titleWithSuffix } />
  <meta name="description" content={ description } />
  <link rel="canonical" href="{ url }">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={ ogType } />
  <meta property="og:url" content={ url } />
  <meta property="og:title" content={ titleWithSuffix } />
  <meta property="og:description" content={ description } />
  <meta property="og:image" content={ image } />
  <meta property="og:site_name" content={ titleSuffix }>
  <meta property="og:locale" content={ locale }>
  <!-- <meta property="fb:app_id" content={ appId }> -->

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={ url } />
  <meta property="twitter:title" content={ titleWithSuffix } />
  <meta property="twitter:description" content={ description } />
  <meta property="twitter:image" content={ image } />
</svelte:head>