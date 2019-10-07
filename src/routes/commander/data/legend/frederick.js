import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_A} from '../statics';

const COMMANDER_NAME = '프리드리히 1세';

const temp = {
  name: COMMANDER_NAME,
  nickname: '빨간 수염',
  image: 'http://image.rok.gg/commander/frederick1.png',
  thumbnail: '',
  basePower: 1200,
  grade: RANK_A,
  rarity: '레전드',
  nation: '독일',
  specialties: {
    red: '리더십',
    yellow: '공성',
    blue: '스킬',
  },
  talentTrees: [
    {
      title: '극딜',
      image: 'https://www.gurugamer.ru/upload/000/u1/2/6/frederick-nuker.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '빨간 수염',
      description: '',
      image: 'https://rok.guide/images/barbarossa.png',
      skillPreviews: [
        {
          name: '추가 피해량',
          previews: makeSkillPreviews('400', '500', '600', '700', '800'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '재정비',
      description: '',
      image: 'https://rok.guide/images/never-give-up.png',
      skillPreviews: [
        {
          name: '치료량',
          previews: makeSkillPreviews('500', '600', '700', '800', '1000'),
        },
      ],
    },
    {
      type: '패시브',
      name: '침입',
      description: '',
      image: 'https://rok.guide/images/invasion.png',
      skillPreviews: [
        {
          name: '피해량 증가',
          previews: makeSkillPreviews('2%', '4%', '6%', '8%', '10%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '독일의 왕',
      description: '',
      image: 'https://rok.guide/images/king-of-deutschland.png',
      skillPreviews: [
        {
          name: '부대 인원 증가',
          previews: makeSkillPreviews('3%', '6%', '9%', '12%', '15%'),
        },
      ],
    },
    {
      type: '강화',
      name: '격노한 빨간 수염',
      description: '',
      image: 'https://rok.guide/images/furious-barbarossa.png',
      beforeAwakening: '3초 동안 공격 시 80%의 확률로 타깃에 추가 피해를 줍니다.', // 각성 전
      afterAwakening: '3초 동안 공격 시 100%의 확률로 타깃에 추가 피해를 줍니다.', // 각성 후
      target: '빨간 수염',
      skillPreviews: [],
    },
  ],
};

export default temp;
