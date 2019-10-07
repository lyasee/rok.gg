import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '랜슬롯';

const temp = {
  name: COMMANDER_NAME,
  nickname: '호수의 기사',
  image: commanderUrl + 'lancelot.png',
  thumbnail: '',
  basePower: 300,
  grade: '',
  rarity: '엘리트',
  nation: '브리튼',
  specialties: {
    red: '기마병 유닛',
    yellow: '유동성',
    blue: '기동',
  },
  talentTrees: [
    {
      title: '기마병 + 유동성',
      image: talentUrl + 'lancelot-gi.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '반목',
      description: '',
      image: skillUrl + 'lancelot-skill-1.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('200', '300', '400', '500', '600'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '원탁의 기사',
      description: '',
      image: skillUrl + 'lancelot-skill-2.png',
      skillPreviews: [
        {
          name: '기마병 행군 속도 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
        {
          name: '기마병 공격력 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '금기의 사랑',
      description: '',
      image: skillUrl + 'lancelot-skill-3.png',
      skillPreviews: [
        {
          name: '받은 피해량 감소',
          previews: makeSkillPreviews('10%', '15%', '20%', '30%', '40%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '슬픔의 전쟁',
      description: '',
      image: skillUrl + 'lancelot-skill-4.png',
      skillPreviews: [
        {
          name: '피해량 증가',
          previews: makeSkillPreviews('2%', '4%', '7%', '10%', '15%'),
        },
        {
          name: '행군 속도 증가',
          previews: makeSkillPreviews('2%', '4%', '7%', '10%', '15%'),
        },
      ],
    },
  ],
};

export default temp;
