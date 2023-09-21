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
        class:is-current={ pathname === href || pathname === href + '/' }
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

<style lang="scss">
  ul {
    display: flex;
    justify-content: center;
  }
  li {
    &:not(:last-child) {
      @include responsive('SP', $MIN_WIDTH) {
        margin-right: math_div(10vw, $DESIGN_WIDTH_SP);
      }
      @include responsive('PC', $MIN_WIDTH) {
        margin-right: 10px;
      }
    }
  }
  a {
    color: $KEY_COLOR_1;
    @include hover() {
      transition: opacity 0.3s $easeInCubic;
      &:hover {
        opacity: 0.7;
        text-decoration: none;
      }
    }
  }
  .is-current {
    color: red;
  }
</style>