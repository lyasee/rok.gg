<script context="module">
  import {APIGetCommanders} from '../../../api/commander';

  export async function preload({params, query}) {
    const commanders = await APIGetCommanders();

    return new Promise((resolve, reject) => {
      this.fetch('/v2/commander/oldcommander.json')
        .then((r) => r.json())
        .then((oldCommanders) => {
          resolve({commanders, oldCommanders});
        })
        .catch((err) => {
          console.log('err: ', err);
          reject({commanders: [], oldCommanders: []});
        });
    });
  }
</script>

<script>
  import CommanderV2Card from '../../../components/commanders/v2/CommanderV2Card.svelte';
  import CommanderOldCard from '../../../components/commanders/CommanderCard.svelte';
  export let commanders = [];
  export let oldCommanders = [];
</script>

<style>
  .update-container {
    display: flex;
    padding: 16px;
  }

  .update-container span {
    font-size: 12px;
    font-weight: bold;
    color: #f06060;
  }

  .commander-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<svelte:head>
  <title>라이즈 오브 킹덤즈</title>
</svelte:head>

<div class="update-container"><span>사령관 목록 v2</span></div>

<div class="commander-list">
  {#each commanders as commander}
    <CommanderV2Card
      id={commander.id}
      rarity={commander.grade.name}
      name={commander.name}
      image={commander.image.url.replace('https://s3.ap-northeast-2.amazonaws.com/image.rok.gg', 'http://image.rok.gg')}
      specialties={commander.specialties}
      nation={commander.nation.name}
      grade={commander.rank ? commander.rank.name : ''} />
  {/each}

  {#each oldCommanders as commander}
    <CommanderOldCard
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
  </script><ins
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
