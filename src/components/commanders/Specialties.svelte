<script>
  import Specialty from './Specialty.svelte';

  export let items;
</script>

<style>
  .specialties-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
</style>

<div class="specialties-container">
  {#each items as item}
    <Specialty text={item.name} image={item.image} />
  {/each}
</div>
