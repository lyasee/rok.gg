<script>
  export let image;
  export let text;
</script>

<div style="display: flex; padding-right: 4px">
  <img src={image} alt="" height="24px" />
  <div style="line-height: 19px;">
    <span style="font-size: 12px;">{text}</span>
  </div>
</div>
