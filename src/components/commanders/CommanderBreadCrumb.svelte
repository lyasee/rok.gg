<script>
  export let name;
</script>

<style>
  .commander-breadcrumb {
    display: flex;
    align-items: center;
  }

  .commander-list {
    color: #f06060;
    font-size: 13px;
  }

  .commander-name {
    font-size: 13px;
    color: #333;
  }

  .divider {
    font-size: 12px;
    color: #333;
    margin: 0 4px;
  }
</style>

<div class="commander-breadcrumb">
  <a class="commander-list" href="/v2/commander"> <span class="commander-list">사령관 목록</span> </a>
  <div class="divider">/</div>
  <span class="commander-name">{name}</span>
</div>
