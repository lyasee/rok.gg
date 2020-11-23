<script context="module">
  import {APIGetNotices} from '../../api/notice';

  export async function preload({params, query}) {
    const notices = await APIGetNotices();
    return {notices};
  }
</script>

<script>
  import NoticeListItem from '../../components/notice/NoticeListItem.svelte';
  export let notices;
</script>

<style>
  .notice-list-container {
    padding: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
    min-height: 450px;
  }

  .notice-list-title {
    font-size: 15px;
    font-weight: bold;
    color: #222;
  }

  .notice-list-wrapper {
    margin-top: 32px;
  }
</style>

<svelte:head>
  <title>라이즈 오브 킹덤즈</title>
</svelte:head>

<div class="notice-list-container">
  <h6 class="notice-list-title">공지사항 목록</h6>

  {#if notices}
    <div class="notice-list-wrapper">
      {#each notices as notice}
        <NoticeListItem id={notice.id} title={notice.title} date={notice.created_at} label={notice.label} />
      {/each}
    </div>
  {:else}
    <div>데이터를 찾을 수 없습니다.</div>
  {/if}
</div>

<!-- <div><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">
  
    </script><ins
      class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-8271789671155671"
      data-ad-slot="9536839823"
      data-ad-format="auto"
      data-full-width-responsive="true" /><script>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script></div>
   -->
