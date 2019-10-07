import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_A, commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '율리우스 카이사르';

const temp = {
  name: COMMANDER_NAME,
  nickname: '무관의 제왕',
  image: commanderUrl + 'julius_caesar.png',
  thumbnail: '',
  basePower: 1200,
  grade: RANK_A,
  rarity: '레전드',
  nation: '로마',
  specialties: {
    red: '리더십',
    yellow: '공성',
    blue: '공격',
  },
  talentTrees: [
    {
      title: '종합',
      image: talentUrl + 'julius_caesar-mix.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '무적의 부대',
      description: '',
      image: skillUrl + 'julius_caesar-skill-1.png',
      skillPreviews: [
        {
          name: '공격력/방어력 증가',
          previews: makeSkillPreviews('10%', '12%', '14%', '16%', '20%'),
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
      name: '신성의 율리우스',
      description: '',
      image: skillUrl + 'julius_caesar-skill-2.png',
      skillPreviews: [
        {
          name: '받은 피해량 감소',
          previews: makeSkillPreviews('3%', '4.5%', '6%', '8%', '10%'),
        },
        {
          name: '피해량 추가 감소',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '공성의 달인',
      description: '',
      image: skillUrl + 'julius_caesar-skill-3.png',
      skillPreviews: [
        {
          name: '방어력 감소',
          previews: makeSkillPreviews('5%', '10%', '15%', '20%', '30%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '창시자',
      description: '',
      image: skillUrl + 'julius_caesar-skill-4.png',
      skillPreviews: [
        {
          name: '부대 인원 증가',
          previews: makeSkillPreviews('3%', '6%', '9%', '12%', '15%'),
        },
      ],
    },
    {
      type: '강화',
      name: '시대를 초월한 자',
      description: '',
      image: skillUrl + 'julius_caesar-skill-5.png',
      beforeAwakening: '5초 동안 부대의 공격력 및 방어력 20% 증가, 주는 피해가 30% 증가합니다.', // 각성 전
      afterAwakening: '단일 타깃에 대량의 피해를 줍니다.(피해량 400) 5초 동안 모든 통솔 부대의 공격력과 방어력이 모두 20% 증가, 주는 피해가 30% 증가합니다.', // 각성 후
      target: '무적의 부대',
      skillPreviews: [],
    },
  ],
};

export default temp;
