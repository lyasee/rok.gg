<script context="module">
  import {APIGetNotice} from '../../api/notice';

  export async function preload({params, query}) {
    const notice = await APIGetNotice(params.id);

    return {notice};
  }
</script>

<script>
  import {onMount} from 'svelte';

  export let notice;

  onMount(async () => {
    notice = await APIGetNotice(params.id);
  });
</script>

<style>
  .notice-detail-container {
    padding: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
    min-height: 450px;
  }

  .back-wrapper {
    margin-bottom: 8px;
  }

  .back {
    font-size: 14px;
    color: #343444;
  }

  .notice-detail-title {
    font-size: 20px;
    font-weight: bold;
    color: #232323;
  }

  .notice-detail-content {
    font-size: 15px;
    white-space: pre-line;
  }
</style>

<div class="notice-detail-container">
  {#if notice}
    <a href="/notice">
      <div class="back-wrapper"><span class="back">목록으로</span></div>
    </a>

    <h6 class="notice-detail-title">{notice.title}</h6>

    <p class="notice-detail-content">
      {@html notice.content}
    </p>
  {:else}
    <div>공지사항을 찾을 수 없습니다.</div>
  {/if}
</div>
