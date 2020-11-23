<script>
  import {timeForToday} from '../../utils/date';

  export let id;
  export let title;
  export let date;
  export let label;
</script>

<style>
  a {
    text-decoration: none;
  }

  .notice_list_item {
    padding: 16px;
    border-bottom: 1px solid #f2f2f2;
  }

  .notice_list_item_label {
    font-size: 13px;
    font-weight: bold;
    color: #5d9cf1;
  }

  .notice_list_item_title {
    font-size: 14px;
    color: #232323;
  }

  .notice_list_item_date {
    margin-left: 8px;
    font-size: 13px;
    color: #a7a7a7;
  }
</style>

<a href="/notice/{id}">
  <div class="notice_list_item">
    <span> <span class="notice_list_item_label">{label}</span> <span class="notice_list_item_date">{timeForToday(date)}</span> </span>
    <p class="notice_list_item_title">{title}</p>
  </div>
</a>
