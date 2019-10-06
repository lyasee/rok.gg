<script>
  import {getNationImage, getSpecificityImage} from '../../routes/commander/data/utils';
  import Specialty from './Specialty.svelte';

  export let rarity;
  export let name;
  export let image;
  export let specialties;
  export let nation;
  export let grade;
</script>

<style>
  a {
    text-decoration: none;
  }

  .shadow {
    box-shadow: 3px 3px 3px 3px #ccc;
  }

  .commander-card {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 25%;
    border-radius: 4px;
  }

  .commander-card-content {
    display: flex;
  }

  .commander-card-iamge {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media (max-width: 599px) {
    .commander-card {
      width: 100%;
      margin: 8px 16px;
    }
  }

  @media (min-width: 600px) and (max-width: 839px) {
    .commander-card {
      width: calc(50% - 16px);
      margin: 8px;
    }
  }

  @media (min-width: 840px) and (max-width: 1079px) {
    .commander-card {
      width: calc(33.3333333% - 16px);
      margin: 8px;
    }
  }

  @media (min-width: 1080px) {
    .commander-card {
      margin: 8px;
      width: calc(25% - 16px);
    }
  }
</style>

<div
  class="commander-card shadow"
  style={rarity === '레전드' ? 'background: #fcd04b;' : rarity === '에픽' ? 'background: #9e54bdf2;' : rarity === '엘리트' ? 'background: #4593e3f5;' : 'background: #2ecc71;'}>
  <a rel="prefetch" href="commander/{name}" style="height: 100%; width: 100%; padding: 16px 0;">
    <div class="commander-card-content">
      <div style="padding: 8px;">
        <div
          class="commander-card-iamge"
          style={`background: url(${image}); height: 80px; width: 72px; background-position: center; background-size: contain; background-repeat: no-repeat;`} />
      </div>
      <div style="padding: 8px 0;">
        <div>
          <img src={getNationImage(nation)} alt="" height="14px" />
          <span style="font-size: 15px; font-weight: bold;">{name}</span>
        </div>
        <!-- <div>
          <span style="color: #fff; font-weight: bold; font-size: 12px;">{grade === '' ? 'NOT' : grade} Rank</span>
        </div> -->
      </div>
    </div>
  </a>
  <div style="position: absolute; bottom: 2px; right: 6px;">
    <span style="font-size: 10px; color: #FFF;">{rarity}</span>
  </div>

  <div style="position: absolute; top: 4px; right: 8px;">
    <span style="color: #fff; font-weight: bold; font-size: 24px;">{grade === '' ? '-' : grade}</span>
  </div>
</div>
