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
  main {
    position: relative;
    /* max-width: 56em; */
    max-width: 64em;
    /* background-color: white; */
    /* padding: 2em; */
    /* padding: 2em 0; */
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
