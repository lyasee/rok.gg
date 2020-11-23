<script>
  export let items;
</script>

<style>
  .tree-container {
    padding: 0;
    margin: 0;
  }

  .tree-list-item {
    list-style-type: none;
    margin: 16px 0;
    width: 100%;
  }

  .tree-name {
    margin-bottom: 4px;
    font-size: 14px;
    color: #333;
  }

  .tree-image {
    max-width: 600px;
  }
</style>

<ul class="tree-container">
  {#each items as item}
    <li class="tree-list-item">
      <h4 class="tree-name">{item.name}</h4>
      <a href={item.image.url} target="_blank">
        <img class="tree-image" src={item.image.url} alt={item.name} width="100%" />
      </a>
    </li>
  {/each}
</ul>
