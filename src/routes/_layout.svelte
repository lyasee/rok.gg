<script>
  import Nav from '../components/Nav.svelte';

  export let segment;

  import {onMount} from 'svelte';
  import {stores} from '@sapper/app';
  const {page} = stores();

  onMount(() => {
    page.subscribe(({path, params, query}) => {
      gtag('config', 'UA-90392326-4', {page_path: path});
    });
  });
</script>

<style>
  .layout {
    max-width: 64em;
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <div class="layout">
    <slot />
  </div>
</main>
