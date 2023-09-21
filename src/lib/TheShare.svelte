<script lang="ts">
  // import { browser } from '$app/environment';
  import {
    twitterShare,
    facebookShare,
    lineShare
  } from './scripts/common';
  import {
    BREAK_POINT,
    SHARE_PLATFORM
  } from './scripts/const';
  import type {
    ShareData,
    SharePlatform
  } from './scripts/types';

  export let shareData: ShareData;

  // 以下、shareData に指定あれば反映する項目
  const hash = shareData.hash
    ? shareData.hash
    : 'ハッシュタグ';

  const matches = (query: string): boolean => {
    return !window.matchMedia(query).matches; // SP なら true を返す
  }

  const share = (platform: SharePlatform): void => {
    switch (platform) {
      case 'twitter':
        twitterShare(shareData.url, shareData.text, hash);
        break;
      case 'facebook':
        facebookShare(shareData.url);
        break;
      case 'line':
        lineShare(shareData.url, shareData.text, matches(`(min-width: ${BREAK_POINT}px)`));
        break;
      default:
    }
  }
</script>

<div class="share">
  <h2 class="share__title">share</h2>
  <ul class="share__list">
    {#each SHARE_PLATFORM as platform}
    <li class="share__item">
      <button
        on:click|stopPropagation="{() => share(platform) }"
        class="share__button"
        type="button"
        data-platform="{ platform }"
        aria-label="{ platform }でシェアする"
      >{ platform }</button>
    </li>
    {/each}
  </ul>
</div>

<style lang="scss">
.share__list {
  display: flex;
}

.share__item {
  &:not(:last-child) {
    margin-right: 1em;
  }
}

// @each $PLATFORM in $PLATFORMS {
//   .share__button[data-platform="#{$PLATFORM}"] {
//     background: url('$lib/images/common/icon_#{$PLATFORM}.min.svg') no-repeat center / contain;
//   }
// }
</style>