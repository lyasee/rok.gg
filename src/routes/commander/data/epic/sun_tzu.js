import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_A_MINUS} from '../statics';

const COMMANDER_NAME = '손무';

const temp = {
  name: COMMANDER_NAME,
  nickname: '하늘의 인재',
  image: 'http://image.rok.gg/commander/sun_tzu.png',
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
      image: 'https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/SUN_TZU_TALENTS_NUKER-1.png?resize=%271024%2C577&ssl=1%27',
    },
    {
      title: '주둔',
      image: 'https://i0.wp.com/everythingrok.com/wp-content/uploads/2019/03/SUN_TZU_TALENTS_GARRISON.png?resize=%271024%2C577&ssl=1%27',
    },
    {
      title: '보병',
      image: 'https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/SUN_TZU_TALENTS_INFANTRI.png?resize=%271024%2C577&ssl=1%27',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '손자병볍',
      description:
        '부채꼴 범위 내 최대 3개 타깃에 즉시 피해를 주고(피해량 150) 다음 턴에 추가 피해를 줍니다.(피해량 50) 타깃 명중 시 마다 손무가 분노 10포인트를 추가 획득합니다.',
      image: 'https://rok.guide/images/art-of-war.png',
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
      image: 'https://rok.guide/images/philosophy-of-war.png',
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
      image: 'https://rok.guide/images/master-strategist.png',
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
      image: 'https://rok.guide/images/ever-changing-tactics.png',
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
      image: 'https://rok.guide/images/book-of-aeons.png',
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
