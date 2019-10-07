import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '수호자';

const temp = {
  name: COMMANDER_NAME,
  nickname: '백성의 방패',
  image: commanderUrl + 'city_keeper.png',
  thumbnail: '',
  basePower: 150,
  grade: '',
  rarity: '우수',
  nation: '기타',
  specialties: {
    red: '보병 유닛',
    yellow: '유동성',
    blue: '공격',
  },
  talentTrees: [
    {
      title: '보병',
      image: talentUrl + 'city_keeper-bo.png',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '단단한 방패',
      description: '',
      image: skillUrl + 'city_keeper-skill-1.png',
      skillPreviews: [
        {
          name: '방어력 증가',
          previews: makeSkillPreviews('3%', '6%', '9%', '12%', '15%'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '건장',
      description: '',
      image: skillUrl + 'city_keeper-skill-2.png',
      skillPreviews: [
        {
          name: '보병 생명력 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '날카로운 칼날',
      description: '',
      image: skillUrl + 'city_keeper-skill-3.png',
      skillPreviews: [
        {
          name: '보병 공격력 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '신속',
      description: '',
      image: skillUrl + 'city_keeper-skill-4.png',
      skillPreviews: [
        {
          name: '보병 방어려 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
      ],
    },
  ],
};

export default temp;
