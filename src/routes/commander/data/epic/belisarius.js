import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_B_MINUS, commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '벨리사리우스';

const temp = {
  name: COMMANDER_NAME,
  nickname: '최후의 로마인',
  image: commanderUrl + 'belisarius.png',
  thumbnail: '',
  basePower: 600,
  grade: RANK_B_MINUS,
  rarity: '에픽',
  nation: '비잔티움',
  specialties: {
    red: '기마병 유닛',
    yellow: '야만',
    blue: '기동',
  },
  talentTrees: [
    {
      title: '기마병',
      image: talentUrl + 'kor/belisarius-gi.jpg',
    },
    {
      title: '이동성',
      image: talentUrl + 'kor/belisarius-mo.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '',
      description: '',
      image: skillUrl + 'belisarius-skill-1.png',
      skillPreviews: [
        {
          name: '공격력 감소',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
        {
          name: '방어력 감소',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('150', '210', '270', '360', '450'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '저항 불가',
      description: '',
      image: skillUrl + 'belisarius-skill-2.png',
      skillPreviews: [
        {
          name: '야만인에게 주는 피해량 증가',
          previews: makeSkillPreviews('5%', '10%', '17%', '25%', '35%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '부켈라리이',
      description: '',
      image: skillUrl + 'belisarius-skill-3.png',
      skillPreviews: [
        {
          name: '기마병 방어력 증가',
          previews: makeSkillPreviews('5%', '7%', '9%', '12%', '15%'),
        },
        {
          name: '행군 속도 증가',
          previews: makeSkillPreviews('10%', '12%', '15%', '20%', '25%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '우회 전술',
      description: '',
      image: skillUrl + 'belisarius-skill-4.png',
      skillPreviews: [
        {
          name: '피해량 증가',
          previews: makeSkillPreviews('10%', '12%', '15%', '20%', '25%'),
        },
      ],
    },
    {
      type: '강화',
      name: '잔인한 부켈라리이',
      description: '',
      image: skillUrl + 'belisarius-skill-5.png',
      beforeAwakening: '통솔 기병 유닛의 방어력이 15% 증가합니다. 전투 후 행군 속도가 25% 증가하며 10초 동안 지속됩니다.', // 각성 전
      afterAwakening: '통솔 기병 유닛의 방어력이 30% 증가합니다. 전투 후 행군 속도가 50% 증가하며 10초 동안 지속됩니다.', // 각성 후
      target: '부켈라리이',
      skillPreviews: [],
    },
  ],
};

export default temp;
