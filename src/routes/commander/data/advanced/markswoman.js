import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '명사수';

const temp = {
  name: COMMANDER_NAME,
  nickname: '그림자의 뱀',
  image: commanderUrl + 'markswoman.png',
  thumbnail: '',
  basePower: 150,
  grade: '',
  rarity: '우수',
  nation: '기타',
  specialties: {
    red: '궁병 유닛',
    yellow: '야만',
    blue: '스킬',
  },
  talentTrees: [
    {
      title: '궁병',
      image: talentUrl + 'markswoman-ya.jpg',
    },
    {
      title: '야만',
      image: talentUrl + 'markswoman-arc.png',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '기습',
      description: '',
      image: skillUrl + 'markswoman-skill-1.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('50', '60', '70', '80', '100'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '독 화살',
      description: '',
      image: skillUrl + 'markswoman-skill-2.png',
      skillPreviews: [
        {
          name: '야만인에게 주는 피해량 증가',
          previews: makeSkillPreviews('2%', '4%', '6%', '8%', '10%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '조준',
      description: '',
      image: skillUrl + 'markswoman-skill-3.png',
      skillPreviews: [
        {
          name: '궁병 공격력 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '민첩',
      description: '',
      image: skillUrl + 'markswoman-skill-4.png',
      skillPreviews: [
        {
          name: '궁병 방어력 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
      ],
    },
  ],
};

export default temp;
