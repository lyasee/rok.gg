import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_S_MINUS} from '../statics';

const COMMANDER_NAME = '카를 마르텔';

const temp = {
  name: COMMANDER_NAME,
  nickname: '불후한 해머',
  image: 'https://rok.guide/wp-content/uploads/2019/02/charles-martel-264x300.png',
  thumbnail: '',
  basePower: 1200,
  grade: RANK_S_MINUS,
  rarity: '레전드',
  nation: '프랑스',
  specialties: {
    red: '보병 유닛',
    yellow: '주둔',
    blue: '방어',
  },
  talentTrees: [
    {
      title: '보병',
      image: 'https://www.gurugamer.ru/upload/000/u1/0/3/martell-infantry.jpg',
    },
    {
      title: '주둔',
      image: 'https://www.gurugamer.ru/upload/000/u1/f/7/martell-garnizon.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '프랑크의 방패',
      description: '',
      image: 'https://rok.guide/images/shield-of-francia.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('600', '700', '800', '1000', '1200'),
        },
        {
          name: '피해량 증가',
          previews: makeSkillPreviews('10%', '14%', '18%', '24%', '30%'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '중장보병',
      description: '',
      image: 'https://rok.guide/images/heavy-infantry.png',
      skillPreviews: [
        {
          name: '보병 방어력 증가',
          previews: makeSkillPreviews('5%', '7%', '9%', '12%', '15%'),
        },
        {
          name: '보병 생명력 증가',
          previews: makeSkillPreviews('5%', '7%', '9%', '12%', '15%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '무관의 제왕',
      description: '',
      image: 'https://rok.guide/images/the-uncrowned-king.png',
      skillPreviews: [
        {
          name: '경계탑 방어력 증가',
          previews: makeSkillPreviews('2%', '4%', '6%', '8%', '10%'),
        },
        {
          name: '주둔 부대 공격력 증가',
          previews: makeSkillPreviews('2%', '4%', '6%', '8%', '10%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '마르텔의 반격',
      description: '',
      image: 'https://rok.guide/images/martel-counterattack.png',
      skillPreviews: [
        {
          name: '반격 피해량 증가',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
      ],
    },
    {
      type: '강화',
      name: '욕화중생',
      description: '',
      image: 'https://rok.guide/images/rise-from-the-ashes.png',
      beforeAwakening: '보병 유닛 방어력 15% 증가, 생명력의 15% 증가합니다.', // 각성 전
      afterAwakening: '보병 유닛의 방어력이 20% 증가, 생명력 20% 증가, 행군 속도가 20% 증가합니다.', // 각성 후
      target: '중장보병',
      skillPreviews: [],
    },
  ],
};

export default temp;
