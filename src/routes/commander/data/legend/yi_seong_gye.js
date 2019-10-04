import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_S} from '../statics';

const COMMANDER_NAME = '이성계';

const temp = {
  name: COMMANDER_NAME,
  nickname: '변혁의 활',
  image: 'https://rok.guide/wp-content/uploads/2019/02/yi-seong-gye-225x300.png',
  thumbnail: '',
  basePower: 1200,
  grade: RANK_S,
  rarity: '레전드',
  nation: '한국',
  specialties: {
    red: '궁병 유닛',
    yellow: '주둔',
    blue: '스킬',
  },
  talentTrees: [
    {
      title: '극딜',
      image: 'https://www.gurugamer.ru/upload/000/u1/0/1/yi-seong-goe-nuker.jpg',
    },
    {
      title: '주둔',
      image: 'https://www.gurugamer.ru/upload/000/u1/0/9/yi-seong-goe-garrison.jpg',
    },
    {
      title: '궁병',
      image: 'https://www.gurugamer.ru/upload/000/u1/9/6/yi-seong-goe.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '만발의 사격',
      description: '',
      image: 'https://rok.guide/images/rain-of-arrows.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('600', '800', '1000', '1200', '1400'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '궁도',
      description: '',
      image: 'https://rok.guide/images/art-of-archery.png',
      skillPreviews: [
        {
          name: '분노 회복',
          previews: makeSkillPreviews('50', '60', '70', '80', '100'),
        },
        {
          name: '궁병 공격력 증가',
          previews: makeSkillPreviews('50%', '60 %', '70%', '80%', '100%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '조선 왕조',
      description: '',
      image: 'https://rok.guide/images/joseon-dynasty.png',
      skillPreviews: [
        {
          name: '주둔 부대/경계탑 공격력 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '운명',
      description: '',
      image: 'https://rok.guide/images/destiny.png',
      skillPreviews: [
        {
          name: '스킬 피해량 증가',
          previews: makeSkillPreviews('20%', '25%', '30%', '40%', '50%'),
        },
      ],
    },
    {
      type: '강화',
      name: '화살 폭풍',
      description: '',
      image: 'https://rok.guide/images/arrow-storm.png',
      beforeAwakening: '부채꼴 범위 내의 적 즉시 피해를 줍니다.(피해량 1400, 최대 타깃 5개) 타깃이 추가될때마다 각 타깃이 받는 피해는 15% 감소합니다.', // 각성 전
      afterAwakening: '원형 범위 내의 적에 즉시 피해를 줍니다.(피해량 1700, 최대 타깃 5개) 타깃이 추가될때마다 각 타깃이 받는 피해는 15% 감소합니다.', // 각성 후
      target: '만발의 사격',
      skillPreviews: [],
    },
  ],
};

export default temp;
