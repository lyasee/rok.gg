import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_S_MINUS} from '../statics';

const COMMANDER_NAME = '리처드 1세';

const temp = {
  name: COMMANDER_NAME,
  nickname: '사자심왕',
  image: 'http://image.rok.gg/commander/richard1.png',
  thumbnail: '',
  basePower: 1200,
  grade: RANK_S_MINUS,
  rarity: '레전드',
  nation: '브리튼',
  specialties: {
    red: '보병 유닛',
    yellow: '주둔',
    blue: '방어',
  },
  talentTrees: [
    {
      title: '보병',
      image: 'https://i1.wp.com/everythingrok.com/wp-content/uploads/2019/04/RICHARD_I_INFANTRY.jpg?w=%27900&ssl=1%27',
    },
    {
      title: '주둔',
      image: 'https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/04/RICHARD_I_GARRISON.jpg?w=%27900&ssl=1%27',
    },
    {
      title: '종합',
      image: 'https://i1.wp.com/everythingrok.com/wp-content/uploads/2019/04/RICHARD_I_MIXED.jpg?w=%27900&ssl=1%27',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '십자군의 혼',
      description: '',
      image: 'https://rok.guide/images/soul-of-the-crusaders.png',
      skillPreviews: [
        {
          name: '치료량',
          previews: makeSkillPreviews('600', '800', '1000', '1200', '1400'),
        },
        {
          name: '피해량 감소',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
        {
          name: '행군 속도 감소',
          previews: makeSkillPreviews('5%', '7%', '9%', '12%', '15%'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '기사도 정신',
      description: '',
      image: 'https://rok.guide/images/chivalry.png',
      skillPreviews: [
        {
          name: '받은 피해량 감소',
          previews: makeSkillPreviews('5%', '7%', '9%', '12%', '15%'),
        },
        {
          name: '반격 피해량 증가',
          previews: makeSkillPreviews('4%', '5%', '6%', '8%', '10%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '사자심왕',
      description: '',
      image: 'https://rok.guide/images/the-lionheart.png',
      skillPreviews: [
        {
          name: '보병 공격력 증가',
          previews: makeSkillPreviews('5%', '7%', '9%', '12%', '15%'),
        },
        {
          name: '보병 방어력 증가',
          previews: makeSkillPreviews('5%', '7%', '9%', '12%', '15%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '역전의 신체',
      description: '',
      image: 'https://rok.guide/images/battle-hardened.png',
      skillPreviews: [
        {
          name: '치료 효과 증가',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
        {
          name: '경계탑에서 받은 피해량 감소',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '잔혹한 사자',
      description: '부대가 받는 피해 5% 감소, 통솔 보병 유닛이 기마병 유닛에게 주는 피해  2% 증가, 10초마다 5초 동안 타깃의 행군 속도가 50% 감소합니다.',
      image: 'https://rok.guide/images/tyrannical-lion.png',
      beforeAwakening: '', // 각성 전
      afterAwakening: '', // 각성 후
      target: '',
      skillPreviews: [],
    },
  ],
};

export default temp;
