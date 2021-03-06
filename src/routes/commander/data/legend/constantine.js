import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_B_PLUS, commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '콘스탄티누스 1세';

const temp = {
  name: COMMANDER_NAME,
  nickname: '비할 데 없는 군주',
  image: commanderUrl + 'constantine1.png',
  thumbnail: '',
  basePower: 1200,
  grade: RANK_B_PLUS,
  rarity: '레전드',
  nation: '비잔티움',
  specialties: {
    red: '보병 유닛',
    yellow: '주둔',
    blue: '지원',
  },
  talentTrees: [
    {
      title: '',
      image: '',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '밀라노 칙령',
      description: '',
      image: skillUrl + 'constantine1-skill-1.png',
      skillPreviews: [
        {
          name: '공격력 감소',
          previews: makeSkillPreviews('20%', '25%', '30%', '35%', '40%'),
        },
        {
          name: '받은 피해량 감소',
          previews: makeSkillPreviews('3%', '4%', '6%', '8%', '10%'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '충성',
      description: '',
      image: skillUrl + 'constantine1-skill-2.png',
      skillPreviews: [
        {
          name: '보병 생명력 증가',
          previews: makeSkillPreviews('%5', '20%', '25%', '30%', '40%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '교착',
      description: '',
      image: skillUrl + 'constantine1-skill-3.png',
      skillPreviews: [
        {
          name: '주둔 부대 공격력 증가',
          previews: makeSkillPreviews('3%', '4%', '6%', '8%', '10%'),
        },
        {
          name: '경계탑 공격력 증가',
          previews: makeSkillPreviews('3%', '4%', '6%', '8%', '10%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '신성한 십자가',
      description: '',
      image: skillUrl + 'constantine1-skill-4.png',
      skillPreviews: [
        {
          name: '치료량',
          previews: makeSkillPreviews('7500', '9000', '130000', '150000'),
        },
        {
          name: '받은 스킬 피해 감소',
          previews: makeSkillPreviews('10%', '15%', '20%', '30%', '40%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '유일한 아우구스투스',
      description: '통솔 부대 공격력이 15%, 방어력이 5% 증가합니다.',
      image: skillUrl + 'constantine1-skill-5.png',
      beforeAwakening: '', // 각성 전
      afterAwakening: '', // 각성 후
      target: '',
      skillPreviews: [],
    },
  ],
};

export default temp;
