<script>
  /** @type {string} */
  export let src
  /** @type {string} */
  let alt // export
  let shape // export
</script>

<div class="{shape}">
  <img {src} {alt}>
  <slot name="text"></slot>
</div>

<!-- <style>
  div {
    @apply text-base;
  }
</style> -->