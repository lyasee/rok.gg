<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`index.json`)
      .then(r => r.json())
      .then(commanders => {
        return { commanders };
      });
  }
</script>

<script>
  import CommanderCard from "../components/commanders/CommanderCard.svelte";
  export let commanders;
</script>

<style>
  .update-container {
    display: flex;
    padding: 16px 8px 0 8px;
  }

  .update-container span {
    font-size: 12px;
    font-weight: bold;
    color: #f06060;
  }

  .commander-list {
    display: flex;
    flex-wrap: wrap;
    padding: 8px 0;
  }
</style>

<svelte:head>
  <title>사령관</title>
</svelte:head>

<div class="update-container">
  <span>업데이트: 2019.10.04</span>
</div>

<div class="commander-list">
  {#each commanders as commander}
    <CommanderCard
      rarity={commander.rarity}
      name={commander.name}
      image={commander.image}
      specialties={commander.specialties}
      nation={commander.nation}
      grade={commander.grade} />
  {/each}
</div>
