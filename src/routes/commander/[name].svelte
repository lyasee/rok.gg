<script context="module">
  export async function preload({params, query}) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`commander/${params.name}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return {commander: data};
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import {getNationImage, getSpecificityImage} from './data/utils';
  import Specialty from '../../components/commanders/Specialty.svelte';
  import Title from '../../components/commanders/Title.svelte';

  export let commander;
</script>

<style>
  .container {
    /* background: #f06060; */
    background: #f6f7f9;
  }

  .container span {
    font-size: 14px;
  }

  .wrapper {
    display: flex;
    padding-top: 16px;
  }

  @media (max-width: 599px) {
    .container {
      padding: 8px;
    }

    .commander-image-wrapper {
      height: 160px;
    }

    .skill-image-wrapper {
      height: 48px;
    }
  }

  @media (min-width: 600px) {
    .container {
      padding: 16px 32px;
    }

    .commander-image-wrapper {
      height: 200px;
    }

    .skill-image-wrapper {
      height: 64px;
    }
  }
</style>

<svelte:head>
  <title>{commander.name}</title>
</svelte:head>

<div class="container">
  <div>
    <span>
      <strong>
        <a href="commander" style="color: #f06060;">사령관</a>
      </strong>
      > {commander.name}
    </span>
  </div>
  <div class="wrapper">
    <!-- left -->
    <div class="commander-image-wrapper">
      <img src={commander.image} alt={commander.name} height="100%" />
    </div>

    <!-- right -->
    <div style="padding: 16px;">
      <!-- 사령관 국가, 닉네임-->
      <div style="height: 18px; display: flex;">
        <div>
          <img src={getNationImage(commander.nation)} alt="" height="14px" />
        </div>
        <div style="padding: 0 3px;">{commander.nation} /</div>
        <div style="padding: 0 3px;">{commander.nickname} /</div>
        <div>
          <span>
            <strong>{' '} {commander.rarity}</strong>
          </span>
        </div>
      </div>

      <!-- 사령관 이름 -->
      <div style="padding: 8px 0;">
        <span style="font-size: 28px;">{commander.name}</span>
      </div>
      <div style="display: flex;">
        <Specialty image={getSpecificityImage(commander.specialties.red)} text={commander.specialties.red} />
        <Specialty image={getSpecificityImage(commander.specialties.yellow)} text={commander.specialties.yellow} />
        <Specialty image={getSpecificityImage(commander.specialties.blue)} text={commander.specialties.blue} />
      </div>
    </div>
  </div>

  <!-- 스킬 -->
  <div style="padding-top: 32px;">
    <Title title="스킬" />
    {#each commander.skills as skill}
      <div style="display: flex; padding: 8px 0;">
        <div class="skill-image-wrapper">
          <img src={skill.image} alt="" height="100%" />
        </div>
        <div style="padding: 2px 8px;">
          <div>
            <span>
              <strong>{skill.name}</strong>
            </span>
            <span style="padding: 0 2px; color: #1A70DC; font-size: 10px;">
              <strong>{skill.type}</strong>
            </span>
          </div>
          <div>
            <span style="font-size: 12px;">{skill.description}</span>
          </div>
          <div>
            {#if skill.rageRequirement}
              <span style="color: #ff6699; font-size: 12px;">
                <strong>필요한 분노 포인트: {skill.rageRequirement}</strong>
              </span>
            {/if}
          </div>
          <div>
            {#if skill.type === '강화'}
              <div>
                <span>
                  강화:
                  <strong>{skill.target}</strong>
                </span>
              </div>
              <div style="padding: 12px 0 4px 0">
                <span style="color: #A9A9A9">각성 전</span>
                <br />
                <span style="font-size: 12px;">{skill.beforeAwakening}</span>
              </div>
              <div style="padding: 4px 0">
                <span style="color: #A9A9A9">각성 후</span>
                <br />
                <span style="font-size: 12px;">{skill.afterAwakening}</span>
              </div>
            {:else}
              {#each skill.skillPreviews as skillPreview}
                <div style="display: flex;">
                  <div>
                    <span style="font-size: 12px;">{skillPreview.name}:</span>
                  </div>
                  <div style="display: flex; padding: 0 8px;">
                    {#each skillPreview.previews as previews}
                      <div style="padding-right: 8px;">
                        <span style="font-size: 12px;">{previews.number}</span>
                      </div>
                    {/each}
                  </div>
                </div>
              {/each}
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- 특성 -->
  <div style="padding: 8px 0;">
    <Title title="추천 특성 트리" />
    {#each commander.talentTrees as talentTree}
      <div style="padding: 8px 0; widht: 100%">
        <h4>{talentTree.title}</h4>
        <img src={talentTree.image} alt="" width="100%" />
      </div>
    {/each}
  </div>

  <!-- 짝궁 -->
  <div style="padding: 8px 0;">
    <div style="padding-bottom: 16px;">
      <Title title="추천 조합 사령관" />
    </div>

    <div style="display: flex;">
      <div style="flex: 1;">
        <h4>주사령관</h4>
        {#each commander.pairs.primary as pair}
          <div style="padding: 8px 0; widht: 100%">
            <span>{pair.rank}티어</span>
            <span>{' - '}</span>
            <span style="color: #f06060; font-weight: bold;">{pair.primary}</span>
            <span>{' - '}</span>
            <span>{pair.secondary}</span>
          </div>
        {/each}
      </div>

      <div style="flex: 1;">
        <h4>부사령관</h4>
        {#each commander.pairs.secondary as pair}
          <div style="padding: 8px 0; widht: 100%">
            <span>{pair.rank}등</span>
            <span>{' - '}</span>
            <span>{pair.primary}</span>
            <span>{' - '}</span>
            <span style="color: #f06060; font-weight: bold;">{pair.secondary}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
