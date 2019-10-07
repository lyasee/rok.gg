import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_D, commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '로하';

const lohar = {
  name: COMMANDER_NAME,
  nickname: '야만인의 포효',
  image: commanderUrl + 'lohar.png',
  thumbnail: '',
  basePower: 600,
  grade: RANK_D,
  rarity: '에픽',
  nation: '기타',
  specialties: {
    red: '종합',
    yellow: '야만',
    blue: '지원',
  },
  talentTrees: [
    {
      title: '종합',
      image: talentUrl + 'lohar-mix.png',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '압도적인 힘',
      description: '단일 타깃에 대량의 피해를 줍니다.(피해량 250) 통솔 부대의 일부 경상 유닛을 치료합니다.(치료량 250)',
      image: skillUrl + 'lohar-skill-1.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('150', '200', '250', '350', '450'),
        },
        {
          name: '치료량',
          previews: makeSkillPreviews('150', '200', '250', '350', '450'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '제재',
      description: '야만인과 중립 유닛에게 주는 피해가 10% 증가합니다.',
      image: skillUrl + 'lohar-skill-2.png',
      skillPreviews: [
        {
          name: '야만인에게 주는 피해량 증가',
          previews: makeSkillPreviews('5%', '10%', '17%', '25%', '35%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '로하의 시험',
      description: '현재 부대 중 모든 사령관이 획득하는 경험치가 20% 증가합니다.',
      image: skillUrl + 'lohar-skill-3.png',
      skillPreviews: [
        {
          name: '경험치 증가',
          previews: makeSkillPreviews('10%', '20%', '30%', '50%', '70%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '포악한 피',
      description: '전투 이탈 후 일부 경상 유닛을 치료합니다.(치료량 500)',
      image: skillUrl + 'lohar-skill-4.png',
      skillPreviews: [
        {
          name: '치료량',
          previews: makeSkillPreviews('500', '600', '700', '800', '1000'),
        },
      ],
    },
    {
      type: '강화',
      name: '불굴의 투혼',
      description: '',
      image: skillUrl + 'lohar-skill-5.png',
      beforeAwakening: '전투 이탈 후 일부 경상 유닛을 치료합니다.(치료량 1000)', // 각성 전
      afterAwakening: '전투 이탈 후 일부 경상 유닛을 치료합니다.(치료량 2000)', // 각성 후
      target: '포악한 피',
      skillPreviews: [],
    },
  ],
};

export default lohar;
