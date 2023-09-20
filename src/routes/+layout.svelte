<script lang="ts">
  import { page } from '$app/stores';
  import TheNav from '$lib/TheNav.svelte';

  export let data;

  $: pathname = $page.url.pathname;

</script>

<TheNav
  navItems={ data.navItems }
  { pathname }
/>

<slot />
