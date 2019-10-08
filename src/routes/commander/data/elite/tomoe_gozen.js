import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '토모에 고젠';

const temp = {
  name: COMMANDER_NAME,
  nickname: '낙양의 미인',
  image: commanderUrl + 'tomoe_gozen1.png',
  thumbnail: '',
  basePower: 600,
  grade: '',
  rarity: '엘리트',
  nation: '일본',
  specialties: {
    red: '궁병 유닛',
    yellow: '유동성',
    blue: '공격',
  },
  talentTrees: [
    {
      title: '유틸',
      image: talentUrl + 'tomoe_gozen-util.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '피의 벚꽃',
      description: '',
      image: skillUrl + 'tomoe_gozen-skill-1.png',
      skillPreviews: [
        {
          name: '공격력 증가',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '신궁',
      description: '',
      image: skillUrl + 'tomoe_gozen-skill-2.png',
      skillPreviews: [
        {
          name: '궁병 공격력 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
        {
          name: '궁병 행군 속도 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '난세의 미인',
      description: '',
      image: skillUrl + 'tomoe_gozen-skill-3.png',
      skillPreviews: [
        {
          name: '분노 회복',
          previews: makeSkillPreviews('3', '6', '10', '15', '20'),
        },
        {
          name: '스킬 피해량 증가',
          previews: makeSkillPreviews('2%', '4%', '7%', '10%', '15%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '영원한 사랑',
      description: '',
      image: skillUrl + 'tomoe_gozen-skill-4.png',
      skillPreviews: [
        {
          name: '피해량 감소',
          previews: makeSkillPreviews('2%', '4%', '7%', '10%', '15%'),
        },
      ],
    },
  ],
};

export default temp;
