<script>
  export let image;
  export let text;
</script>

<style>
  .specialty-container {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .specialty-text {
    font-size: 12px;
  }
</style>

<div class="specialty-container">
  <img src={image} alt="" height="24px" />
  <div><span class="specialty-text">{text.replace('유닛', '')}</span></div>
</div>
