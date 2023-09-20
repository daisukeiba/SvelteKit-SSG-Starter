<script lang="ts">
  import type { NavItem } from './scripts/types';

  export let pathname: string;
  export let navItems: NavItem[];
</script>

<nav class="nav">
  <ul class="nav__list">
    {#each navItems as {
      href,
      id,
      label
    }, i}
    <li
      class="nav__item"
    >
      <a
        data-sveltekit-reload
        class:is-current={ pathname === href }
        class="nav__link"
        href="{ href }"
        data-id="{ id }"
      >
        <span class="nav__linkLabel">{ label }</span>
      </a>
    </li>
    {/each}
  </ul>
</nav>

<style>
  .is-current {
    color: red;
  }
</style>