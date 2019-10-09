import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_S, commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '에드워드 우드스톡';

const temp = {
  name: COMMANDER_NAME,
  nickname: '블랙 프린스',
  image: commanderUrl + 'edward_of_woodstock.png',
  thumbnail: '',
  basePower: 1200,
  grade: RANK_S,
  rarity: '레전드',
  nation: '브리튼',
  specialties: {
    red: '궁병 유닛',
    yellow: '유동성',
    blue: '스킬',
  },
  talentTrees: [
    {
      title: '스킬 + 랠리',
      image: talentUrl + 'edward_of_woodstock-skill.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: 'Archers Honor',
      description: '',
      image: skillUrl + 'edward_of_woodstock-skill-1.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('1500', '1700', '1900', '2200', '2500'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: 'Vengeful Crusade',
      description: '',
      image: skillUrl + 'edward_of_woodstock-skill-2.png',
      skillPreviews: [
        {
          name: '궁병 유닛 행군 속도 상승',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
      ],
    },
    {
      type: '패시브',
      name: "Crecy's Campaign",
      description: '',
      image: skillUrl + 'edward_of_woodstock-skill-3.png',
      skillPreviews: [
        {
          name: '스킬 공격력 증가',
          previews: makeSkillPreviews('5%', '10%', '15%', '20%', '25%'),
        },
        {
          name: '보병 공격시 데미지 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
      ],
    },
    {
      type: '패시브',
      name: "Limoges' Ambush",
      description: '',
      image: skillUrl + 'edward_of_woodstock-skill-4.png',
      skillPreviews: [
        {
          name: '궁병 공격력 증가',
          previews: makeSkillPreviews('2%', '4%', '6%', '8%', '10%'),
        },
      ],
    },
    {
      type: '패시브',
      name: 'All or Nothing',
      description: '스킬 사용 후 2초 동안 일반 공격 및 반격 데미지 50% 증가',
      image: skillUrl + 'edward_of_woodstock-skill-5.png',
      beforeAwakening: '', // 각성 전
      afterAwakening: '', // 각성 후
      target: '',
      skillPreviews: [],
    },
  ],
};

export default temp;
