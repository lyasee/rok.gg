<script>
  import {getTogethers} from '../api/together';
  const togethers = getTogethers();
</script>

<style>
  .together-container {
    padding: 32px;
  }

  .together-title {
    padding: 16px 0;
  }

  .together-nickname {
    color: #f06060;
    font-weight: bold;
  }

  h3 {
    color: #f06060;
    font-weight: bold;
  }

  .small-text {
    font-size: 12px;
  }
</style>

<div class="together-container">
  <div class="together-title">
    <h3>특성 이미지 제공</h3>
  </div>

  {#each togethers as together}
    <div>
      <p>
        {#if together.server === ''}
          <span class="together-nickname"># {together.nickname}</span>
        {:else}
          <span>
            <span class="together-nickname"># {together.nickname}</span>
            <span class="small-text">(#{together.server})</span>
          </span>
        {/if}
        <br />
        {#each together.items as item, i}
          {#if together.items.length - 1 !== i}
            <span style="padding-right: 8px;" class="small-text">
              <a rel="prefetch" href="commander/{item}">{item}</a>
              ,
            </span>
          {:else}
            <span class="small-text">
              <a rel="prefetch" href="commander/{item}">{item}</a>
            </span>
          {/if}
        {/each}
      </p>
    </div>
  {/each}
</div>
