import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_A_MINUS, commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '손무';

const temp = {
  name: COMMANDER_NAME,
  nickname: '하늘의 인재',
  image: commanderUrl + 'sun_tzu.png',
  thumbnail: '',
  basePower: 600,
  grade: RANK_A_MINUS,
  rarity: '에픽',
  nation: '중국',
  specialties: {
    red: '보병 유닛',
    yellow: '주둔',
    blue: '스킬',
  },
  talentTrees: [
    {
      title: '극딜',
      image: talentUrl + 'kor/sun_tzu-nuker.jpg',
    },
    {
      title: '주둔',
      image: talentUrl + 'kor/sun_tzu-zu.jpg',
    },
    {
      title: '보병',
      image: talentUrl + 'kor/sun_tzu-bo.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skillLevel: [
    {
      order: 1,
      desc: '5000 - 첫번째 스킬 5랩까지 별1개 유지',
    },
    {
      order: 2,
      desc: '5110 - 별3개로 업그레이드',
    },
    {
      order: 3,
      desc: '5150 - 3번째 스킬만 업그레이드 (2번째 스킬은 필요 없음)',
    },
    {
      order: 3,
      desc: '5151 - 별4개로 업그레이드',
    },
    {
      order: 3,
      desc: '5555 - 보조인 경우 레벨업 중단, 메인은 경우 레벨링',
    },
  ],
  skills: [
    {
      type: '액티브',
      name: '손자병볍',
      description:
        '부채꼴 범위 내 최대 3개 타깃에 즉시 피해를 주고(피해량 150) 다음 턴에 추가 피해를 줍니다.(피해량 50) 타깃 명중 시 마다 손무가 분노 10포인트를 추가 획득합니다.',
      image: skillUrl + 'sun_tzu-skill-1.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('150', '210', '270', '360', '450'),
        },
        {
          name: '추가 피해량',
          previews: makeSkillPreviews('50', '70', '90', '120', '150'),
        },
        {
          name: '분노 회복',
          previews: makeSkillPreviews('10', '20', '30', '40', '50'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '용병지도',
      description: '주둔 부대 사령관 담당 시 주둔 부대가 받는 피해가 1% 감소합니다.',
      image: skillUrl + 'sun_tzu-skill-2.png',
      skillPreviews: [
        {
          name: '주둔 부대 피해량 감소',
          previews: makeSkillPreviews('1%', '2%', '3%', '5%', '7%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '전략의 대가',
      description: '통솔 부대가 받는 피해 감소 효과 4% 증가, 보병 유닛의 생명력이 4% 증가합니다.',
      image: skillUrl + 'sun_tzu-skill-3.png',
      skillPreviews: [
        {
          name: '받은 피해량 감소',
          previews: makeSkillPreviews('4%', '5%', '6%', '8%', '10%'),
        },
        {
          name: '보병 생명력 증가',
          previews: makeSkillPreviews('4%', '5%', '6%', '8%', '10%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '병자궤도',
      description: '스킬 피해가 5% 증가합니다.',
      image: skillUrl + 'sun_tzu-skill-4.png',
      skillPreviews: [
        {
          name: '스킬 피해량 증가',
          previews: makeSkillPreviews('5%', '8%', '11%', '15%', '20%'),
        },
      ],
    },
    {
      type: '강화',
      name: '만세병서',
      description: '',
      image: skillUrl + 'sun_tzu-skill-5.png',
      beforeAwakening:
        '부채꼴 범위 내 최대 3개 타깃에 즉시 피해를 주고(피해량 450) 다음 턴에 추가 피해를 줍니다.(피해량 150) 타깃 명중 시마다 손무가 분노 50포인트를 추가 획득합니다.', // 각성 전
      afterAwakening:
        '부채꼴 범위 내 최대 5개 타깃에 즉시 피해를 주고(피해량 800) 다음 턴에 추가 피해를 줍니다.(피해량 200) 타깃 명중 시마다 손무가 분노 50포인트를 추가 획득합니다.', // 각성 후
      target: '',
      skillPreviews: [],
    },
  ],
};

export default temp;
