<script lang="ts">
	import { fade } from 'svelte/transition';
  export let visible: Boolean;

  const paragraphs: string[] = [
    'モーダルの中身'
  ];

  const close = () => {
    // console.log('close');
    if (document.documentElement.classList.contains('is-openModal')) {
      document.documentElement.classList.remove('is-openModal');
    }
    document.documentElement.style.paddingRight = '';
    visible = false;
  }

  // esc でモーダルを閉じる
  const keyDownClose = (e: KeyboardEvent): void => {
    // console.log({e});
    if (e.code === 'Escape' && visible) close();
  };

</script>

<svelte:window on:keydown={ keyDownClose } />
{#if visible}
<div class="aboutModal" transition:fade="{{duration: 200}}">
  <div class="aboutModal__wrap">
    <button
      on:click="{ close }"
      class="aboutModal__bg"
    ></button>
    <div class="aboutModal__body">
      <div class="aboutModal__content">
        <div class="aboutModal__close">
          <button
            on:click="{ close }"
            class="aboutModal__closeButton"
          ></button>
        </div>
        <div class="aboutModal__contentBody">
          {#each paragraphs as paragraph}
          <p class="aboutModal__paragraph">{@html paragraph }</p>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
{/if}

<style lang="scss">
.aboutModal {
  height: 100%;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 9999;
}

.aboutModal__wrap {
  display: table;
  height: 100%;
  position: relative;
  width: 100%;
  @include responsive('SP', $MIN_WIDTH) {
    padding-top: math_div(30vw, $DESIGN_WIDTH_SP);
    padding-bottom: math_div(20vw, $DESIGN_WIDTH_SP);
  }
  @include responsive('PC', $MIN_WIDTH) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}

.aboutModal__bg {
  background-color: rgba($color: $KEY_COLOR_2, $alpha: 0.6);
  border: none;
  height: 100%;
  opacity: 0.4;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  touch-action: none;
  width: 100%;
}

.aboutModal__body {
  display: table-cell;
  vertical-align: middle;
}

.aboutModal__content {
  background-color: $BASE_COLOR_1;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  @include responsive('SP', $MIN_WIDTH) {
    border-radius: math_div(30vw, $DESIGN_WIDTH_SP);
    padding-top: math_div(28vw, $DESIGN_WIDTH_SP);
    padding-right: math_div(20vw, $DESIGN_WIDTH_SP);
    padding-left: math_div(20vw, $DESIGN_WIDTH_SP);
    width: math_div(340vw, $DESIGN_WIDTH_SP);
  }
  @include responsive('PC', $MIN_WIDTH) {
    border-radius: 60px;
    padding-top: 56px;
    padding-right: 64px;
    padding-left: 64px;
    width: 896px;
  }
}

.aboutModal__contentBody {
  height: 100%;
  overflow: hidden;
}

.aboutModal__close {
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  @include responsive('SP', $MIN_WIDTH) {
    top: math_div(-10vw, $DESIGN_WIDTH_SP);
    right: math_div(-10vw, $DESIGN_WIDTH_SP);
    width: math_div(30vw, $DESIGN_WIDTH_SP);
  }
  @include responsive('PC', $MIN_WIDTH) {
    top: -30px;
    right: -30px;
    width: 88px;
  }
}

.aboutModal__closeButton {
  background-color: $KEY_COLOR_1;
  border: none;
  cursor: pointer;
  display: block;
  padding: 0;
  width: 100%;
  @include responsive('SP', $MIN_WIDTH) {
    height: math_div(30vw, $DESIGN_WIDTH_SP);
  }
  @include responsive('PC', $MIN_WIDTH) {
    height: 88px;
  }
}
</style>