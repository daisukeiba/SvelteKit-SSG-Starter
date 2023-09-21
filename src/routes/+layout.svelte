<script lang="ts">
  import { dev } from '$app/environment';
  import { page } from '$app/stores';
  import TheNav from '$lib/TheNav.svelte';

  console.log({dev}); // Boolean devサーバーが使われるか
  export let data;

  $: pathname = $page.url.pathname;

</script>

<TheNav
  navItems={ data.navItems }
  { pathname }
/>

<slot />

<style lang="scss">
:global(body) {
  font-family: $FONT_FAMILY;
  @include responsive('PC', $MIN_WIDTH) {
  }
  @include responsive('SP', $MIN_WIDTH) {
  }
}
</style>