<script>
  export let nation; // {name: string, image: string}
  export let nickname;
  export let grade;
</script>

<style>
  .commander-option-container {
    height: 18px;
    display: flex;
  }

  .commander-option-divider {
    padding: 0 3px;
  }
</style>

<div class="commander-option-container">
  <div><img src={nation.image} alt={nation.name} height="14px" /></div>
  <div class="commander-option-divider">{nation.name} /</div>
  <div class="commander-option-divider">{nickname} /</div>
  <strong>{grade}</strong>
</div>
