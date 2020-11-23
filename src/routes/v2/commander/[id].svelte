<script context="module">
  import {APIGetCommander} from '../../../api/commander';

  export async function preload({params, query}) {
    const commander = await APIGetCommander(params.id);

    return {commander};
  }
</script>

<script>
  import CommanderBreadCrumb from '../../../components/commanders/CommanderBreadCrumb.svelte';
  import Specialties from '../../../components/commanders/Specialties.svelte';
  import CommanderOptions from '../../../components/commanders/CommanderOptions.svelte';
  import CommanderTrees from '../../../components/commanders/CommanderTrees.svelte';
  import CommanderSkills from '../../../components/commanders/CommanderSkills.svelte';
  export let commander;
</script>

<style>
  .container {
    background: #f6f7f9;
    padding: 16px;
  }

  .commander-breadcrub-wrapper {
    margin-bottom: 16px;
  }

  .commander-information {
    display: flex;
    align-items: center;
  }

  .commander-name {
    margin-top: 12px;
    margin-bottom: 12px !important;
    font-size: 24px;
    color: #333;
  }

  .commander-image {
    height: 160px;
  }

  .commander-text-container {
    margin-left: 16px;
    width: 100%;
    max-width: 300px;
  }

  .commander-skills {
    margin-top: 64px;
  }

  .commander-trees {
    margin-top: 64px;
  }

  .commander-trees-title {
    font-size: 17px;
    font-weight: bold;
    color: #333;
  }
</style>

<svelte:head>
  <title>사령관 - {commander.name}</title>
  <meta name="title" content="" />
  <meta name="keywords" content="rok.gg,rokgg,라이브오브킹덤즈,라오킹,사령관,{commander.name}" />
  <meta http-equiv="publisher" content="rok.gg" />
  <meta http-equiv="author" content="rok.gg" />
  <meta name="description" content="사령관 특성, 스킬트리 rok.gg" />
  <meta property="og:title" content="사령관 - {commander.name}" />
  <meta property="og:image" content={commander.image.url} />
  <meta property="og:image:width" content="400" />
  <meta property="og:image:height" content="400" />
  <meta property="og:url" content="https://rok.gg" />
  <meta property="og:site_name" content="rok.gg" />
  <meta property="og:type" content="website" />
  <meta property="og:description" content="rok.gg - {commander.name}" />
</svelte:head>

{#if commander}
  <div class="container">
    <div class="commander-breadcrub-wrapper">
      <CommanderBreadCrumb name={commander.name} />
    </div>

    <div class="commander-information">
      <img class="commander-image" src={commander.image.url} alt={commander.name} />
      <div class="commander-text-container">
        <CommanderOptions
          nation={{name: commander.nation.name, image: commander.nation.image.url}}
          nickname={commander.nickname}
          grade={commander.grade.name} />
        <h6 class="commander-name">{commander.name}</h6>
        <Specialties
          items={commander.specialties.map((s) => {
            return {name: s.name, image: s.image.url};
          })} />
      </div>
    </div>

    {#if commander.skills && commander.skills.length > 0}
      <div class="commander-skills">
        <h6 class="commander-trees-title">스킬</h6>
        <CommanderSkills items={commander.skills} />
      </div>
    {/if}

    <div class="commander-trees">
      <h6 class="commander-trees-title">추천 특성 트리</h6>
      <CommanderTrees items={commander.trees} />
    </div>
  </div>
{:else}
  <div class="container">
    <p>사령관 정보를 찾을 수 없습니다.</p>
  </div>
{/if}

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
