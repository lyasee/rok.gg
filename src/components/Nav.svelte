<script>
  export let segment;
</script>

<style>
  .nav-container {
    display: flex;
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
  }

  .logo-wrapper {
    align-items: center;
    display: flex;
    padding: 0 24px;
  }

  .logo-wrapper a {
    font-weight: bold;
    color: #f06060;
  }

  nav {
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
    color: #f06060;
    font-weight: bold;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<div class="nav-container">
  <div class="logo-wrapper">
    <a href=".">ROK.GG</a>
  </div>
  <nav>
    <ul>
      <li>
        <a
          class={!segment || segment === 'commander' ? 'selected' : ''}
          href=".">
          사령관
        </a>
      </li>
      <!-- <li>
        <a class={segment === 'info' ? 'selected' : ''} href="info">정보</a>
      </li> -->
    </ul>
  </nav>
</div>
