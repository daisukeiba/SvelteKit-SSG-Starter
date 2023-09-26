<script lang="ts">
  import { PUBLIC_BASE_URL } from '$env/static/public';
  import { page } from '$app/stores';
  import type {
    MetaData,
    ShareData
  } from '$lib/scripts/types';
  import AboutModal from '$lib/AboutModal.svelte';
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

  interface ModalData {
    visible: boolean,
  }
  let modalData: ModalData = {
    visible: false,
  }

  const openModal = () => {
    // console.log('openModal');
    const scrollbarWidth: number = window.innerWidth - document.body.scrollWidth;
    if (scrollbarWidth) {
      document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.documentElement.classList.add('is-openModal');
    modalData.visible = true;
  }

</script>

<TheMeta { metaData }/>

<h1>about</h1>

<p>
  <button
    on:click="{ openModal }"
    type="button"
    aria-label="モーダルを開く"
  >
  モーダルを開く
  </button>
</p>

<AboutModal {...modalData} />

<TheShare { shareData } />