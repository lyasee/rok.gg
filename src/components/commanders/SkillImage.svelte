<script>
  export let image;
</script>

<style>
  .empty-skill-image {
    border: 1px solid #eaeaea;
    background-color: #fff;
    border-radius: 6px;
    height: 64px;
    width: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .empty-skill-image-text {
    transform: rotate(320deg);
    font-size: 14px;
    color: #888;
  }

  .image {
    height: 64px;
    width: 64px;
  }
</style>

{#if image}
  <div><img class="image" src={image} alt="aa" /></div>
{:else}
  <div class="empty-skill-image"><span class="empty-skill-image-text">skill</span></div>
{/if}
