<script>
  import SkillImage from './SkillImage.svelte';
  export let items;
</script>

<style>
  .skill-wrapper {
    margin: 16px 0;
    padding-bottom: 8px;
  }

  .skill {
    display: flex;
    align-items: center;
  }

  .skill-name-wrapper {
    display: flex;
    align-items: center;
  }

  .skill-name {
    font-size: 16px;
    font-weight: bold;
    color: #222;
  }

  .skill-label {
    margin-top: 1px;
    font-size: 12px;
    font-weight: bold;
    color: #1a70dc;
    margin-left: 8px;
  }

  .skill-require {
    margin-top: 4px;
    font-size: 13px;
    color: #f06060;
  }

  .skill-text-container {
    margin-left: 8px;
  }

  .skill-content {
    margin-top: 8px;
    white-space: pre-line;
  }
</style>

<div>
  {#each items as item}
    <div class="skill-wrapper">
      <div class="skill">
        <SkillImage image={item.image ? item.image.url : ''} />
        <div class="skill-text-container">
          <div class="skill-name-wrapper">
            <div class="skill-name">{item.name}</div>
            <div class="skill-label">{item.label}</div>
          </div>
          {#if item.require}
            <div class="skill-require">필요한 스킬 포인트 {item.require}</div>
          {/if}
        </div>
      </div>
      <div>
        <p class="skill-content">{item.content}</p>
      </div>
    </div>
  {/each}
</div>
