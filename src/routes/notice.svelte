<script>
  const legends = [
    {name: '알렉산더 대왕', isRequired: true},
    {name: '이성계', isRequired: true},
    {name: '살라딘', isRequired: true},
    {name: '엘 시드', isRequired: true},
    {name: '리처드 1세', isRequired: true},
    {name: '카를 마르텔', isRequired: false},
    {name: '미나모토노 요시쓰네', isRequired: false},
    {name: '조조', isRequired: false},
    {name: '프리드리히 1세', isRequired: false},
    {name: '율리우스 카이사르', isRequired: false},
    {name: '한니발 바르카', isRequired: false},
    {name: '메흐메트 2세', isRequired: false},
    {name: '콘스탄티누스 1세', isRequired: true},
    {name: '선덕', isRequired: true},
    {name: '칭기즈칸', isRequired: true},
    {name: '클레오파트라 7세', isRequired: false},
    {name: '에설플레드', isRequired: false},
  ];

  const epics = [
    {name: '손무', isRequired: false},
    {name: '구스노키 마사시게', isRequired: false},
    {name: '을지문덕', isRequired: false},
    {name: '펠라기우스', isRequired: false},
    {name: '잔 다르크', isRequired: false},
    {name: '부디카', isRequired: false},
    {name: '바이바르스', isRequired: false},
    {name: '오스만 1세', isRequired: false},
    {name: '헤르만', isRequired: false},
    {name: '벨리사리우스', isRequired: false},
    {name: '스키피오', isRequired: false},
    {name: '로하', isRequired: false},
  ];

  const elites = [
    {name: '쿠스탄차', isRequired: false},
    {name: '샤르카', isRequired: false},
    {name: '랜슬롯', isRequired: false},
    {name: '가이우스 마리우스', isRequired: false},
    {name: '토모에 고젠', isRequired: false},
  ];

  const greats = [
    {name: '명사수', isRequired: false},
    {name: '수호자', isRequired: false},
    {name: '백부장', isRequired: false},
    {name: '용기병', isRequired: false},
  ];
</script>

<style>
  @media (max-width: 600px) {
    div,
    p,
    span {
      font-size: 12px !important;
    }
  }
</style>

<svelte:head>
  <title>공지사항</title>
</svelte:head>

<div style="padding: 32px 16px;">
  <!-- 1 -->
  <p>안녕하세요. ROK.GG 입니다.</p>
  <p>
    이 사이트는 사령관 특성을 모아둔 사이트입니다.
    <br />
    주말 동안(10.05 ~ 10.06)
    <span style="color: #f06060; font-weight: bold;">총 방문자 6200분</span>
    이 이용해주셨습니다.
    <br />
    많은 이용에 감사합니다.
  </p>
  <p>
    현재는 해외 사이트, 유투버등의 자료로 이루어져있습니다.
    <br />
    ROK.GG에서 해외 자료를 참고해서
    <span style="color: #f06060; font-weight: bold;">국내 번역된 특성</span>
    을 제공하고자 합니다.
    <br />
    해당 사이트를 이용해주시는 분들의 도움이 필요합니다.
    <br />
    모든 사령관을 가지고 있지 않아서 사령관의 특성 이미지가 필요합니다.
    <br />
  </p>
  <p>
    아래 내용을 참고하여
    <a href="mailto:notice.rokgg@gmail.com">
      <span style="color: #f06060; font-weight: bold;">notice.rokgg@gmail.com</span>
    </a>
    로 자신의 닉네임과 함께 이미지를 보내주세요.
    <br />
    <strong>(ex 메일 제목: [헤르만] #1511 알오케지지)</strong>
    <br />
    도움을 주신분들의 닉네임을 사이트에 표시하려고 합니다.
    <br />
    (표시를 원치 않으시는 분들은 이메일 내용에 닉네임을 빼고 보내주세요.)
  </p>
  <br />

  <!-- 2 -->
  <div>
    <h3>
      <strong>필요 이미지</strong>
    </h3>
    <p>
      사령관의 특성 이미지 캡처본
      <br />
      특성이 안찍혀있을수록 좋습니다. 하지만 특성이 찍혀있어도 괜찮습니다.
      <br />
    </p>
    <img src="https://user-images.githubusercontent.com/18377818/66270810-75c19180-e892-11e9-88c3-5ca5610bb184.jpg" alt="base" width="100%" />
    <br />
    <p>필요 사령관 목록</p>
  </div>

  <!-- 레전드/에픽 -->
  <div style="display: flex;">
    <div style="width: 50%;">
      <p>
        레전드
        <br />
        {#each legends as legend, i}
          <div>
            <span>{i + 1}.</span>
            {#if legend.isRequired}
              <span style="padding: 0 4px;">{legend.name}</span>
              <span style="color: #f06060; font-weight: bold;">/ 필요</span>
            {:else}
              <span style="padding: 0 4px; text-decoration: line-through; color: #a9a9a9;">{legend.name} / 완료</span>
            {/if}
          </div>
        {/each}
      </p>
    </div>
    <div style="width: 50%;">
      <p>
        에픽
        <br />
        {#each epics as epic, i}
          <div>
            <span>{i + 1}.</span>
            {#if epic.isRequired}
              <span style="padding: 0 4px;">{epic.name}</span>
              <span style="color: #f06060; font-weight: bold;">/ 필요</span>
            {:else}
              <span style="padding: 0 4px; text-decoration: line-through; color: #a9a9a9;">{epic.name} / 완료</span>
            {/if}
          </div>
        {/each}
      </p>
    </div>
  </div>

  <!-- 엘리트/우수 -->
  <div style="display: flex;">
    <div style="width: 50%;">
      <p>
        엘리트
        <br />
        {#each elites as elite, i}
          <div>
            <span>{i + 1}.</span>
            {#if elite.isRequired}
              <span style="padding: 0 4px;">{elite.name}</span>
              <span style="color: #f06060; font-weight: bold;">/ 필요</span>
            {:else}
              <span style="padding: 0 4px; text-decoration: line-through; color: #a9a9a9;">{elite.name} / 완료</span>
            {/if}
          </div>
        {/each}
      </p>
    </div>
    <div style="width: 50%;">
      <p>
        우수
        <br />
        {#each greats as great, i}
          <div>
            <span>{i + 1}.</span>
            {#if great.isRequired}
              <span style="padding: 0 4px;">{great.name}</span>
              <span style="color: #f06060; font-weight: bold;">/ 필요</span>
            {:else}
              <span style="padding: 0 4px; text-decoration: line-through; color: #a9a9a9;">{great.name} / 완료</span>
            {/if}
          </div>
        {/each}
      </p>
    </div>
  </div>
</div>
