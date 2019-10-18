<script context="module">
  export function preload({params, query}) {
    return this.fetch(`index.json`)
      .then(r => r.json())
      .then(commanders => {
        return {commanders};
      });
  }
</script>

<script>
  import CommanderCard from '../components/commanders/CommanderCard.svelte';
  export let commanders;
</script>

<style>
  .update-container {
    display: flex;
    padding: 16px 16px 0 16px;
  }

  .update-container span {
    font-size: 12px;
    font-weight: bold;
    color: #f06060;
  }

  .notice-container {
    display: flex;
    align-items: center;
    margin: 16px 16px 0 16px;
    padding: 8px 16px;
    height: 40px;
    background: #f6f7f9;
    border-radius: 4px;
    box-shadow: 2px 2px 2px 2px #ccc;
  }

  .commander-list {
    display: flex;
    flex-wrap: wrap;
    padding: 8px 0;
  }
</style>

<svelte:head>
  <title>라이즈 오브 킹덤즈</title>
</svelte:head>

<div class="update-container">
  <span>업데이트: 2019.10.18 (일부 사령관 스킬 레벨업 순서 추가)</span>
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

<div>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">

  </script>
  <!-- 가로 긴거 -->
  <ins
    class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-8271789671155671"
    data-ad-slot="9536839823"
    data-ad-format="auto"
    data-full-width-responsive="true" />
  <script>
    (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</div>
