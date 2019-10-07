import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_C_MINUS, commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '스키피오';

const scipio = {
  name: COMMANDER_NAME,
  nickname: '전쟁의 칼날',
  image: commanderUrl + 'scipio.png',
  thumbnail: '',
  basePower: 600,
  grade: RANK_C_MINUS,
  rarity: '에픽',
  nation: '로마',
  specialties: {
    red: '리더십',
    yellow: '공성',
    blue: '공격',
  },
  talentTrees: [
    {
      title: '종합 특성트리',
      image: talentUrl + 'kor/scipio-mix.jpg',
    },
    {
      title: '반복 전투',
      image: talentUrl + 'scipio-rally.png',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '군인의 삶',
      description: '5초 동안 통솔 부대가 받는 피해 20% 감소, 반격 피해가 20% 증가합니다.',
      image: skillUrl + 'scipio-skill-1.png',
      skillPreviews: [
        {
          name: '받은 피해량 감소',
          previews: makeSkillPreviews('10%', '13%', '16%', '20%', '25%'),
        },
        {
          name: '반격 피해량 증가',
          previews: makeSkillPreviews('10%', '13%', '16%', '20%', '25%'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '인내하는 자',
      description: '스키피오 통솔 부대가 공격받는 경우 10%의 확률로 1초 동안 공격력이 100% 증가합니다.',
      image: skillUrl + 'scipio-skill-2.png',
      skillPreviews: [
        {
          name: '공격력 증가',
          previews: makeSkillPreviews('30%', '40%', '60%', '80%', '100%'),
        },
        {
          name: '치료량',
          previews: makeSkillPreviews('150', '200', '250', '350', '450'),
        },
      ],
    },
    {
      type: '패시브',
      name: '아프리카의 정복자',
      description: '다른 지도자의 도시 공격 시 주는 피해가 1% 증가합니다.',
      image: skillUrl + 'scipio-skill-3.png',
      skillPreviews: [
        {
          name: '피해량 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '5%', '7%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '명문 귀족',
      description: '부대의 최대 수용 인원이 2% 증가합니다.',
      image: skillUrl + 'scipio-skill-4.png',
      skillPreviews: [
        {
          name: '명문 귀족',
          previews: makeSkillPreviews('2%', '4%', '6%', '8%', '10%'),
        },
      ],
    },
    {
      type: '강화',
      name: '전면 공격',
      description: '',
      image: skillUrl + 'scipio-skill-5.png',
      beforeAwakening: '스키피오 통솔 부대가 공격 받는 경우 10%의 확률로 1초동안 공격력이 100% 증가합니다.', // 각성 전
      afterAwakening: '스키피오 통솔 부대가 공격 받는 경우 15%의 확률로 2초동안 공격력이 100% 증가합니다.', // 각성 후
      target: '인내하는 자',
      skillPreviews: [],
    },
  ],
};

export default scipio;
