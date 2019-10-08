import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '용기병';

const temp = {
  name: COMMANDER_NAME,
  nickname: '불타는 창',
  image: commanderUrl + 'dragon_lancer.png',
  thumbnail: '',
  basePower: 150,
  grade: '',
  rarity: '우수',
  nation: '기타',
  specialties: {
    red: '기마병 유닛',
    yellow: '유동성',
    blue: '기동',
  },
  talentTrees: [
    {
      title: '기마병',
      image: talentUrl + 'dragon_lancer-gi.jpg',
    },
    {
      title: '이동성',
      image: talentUrl + 'dragon_lancer-mo.png',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '위협',
      description: '',
      image: skillUrl + 'dragon_lancer-skill-1.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('30', '40', '50', '60', '75'),
        },
        {
          name: '추가 피해량',
          previews: makeSkillPreviews('30', '40', '50', '60', '75'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '명마',
      description: '',
      image: skillUrl + 'dragon_lancer-skill-2.png',
      skillPreviews: [
        {
          name: '기마병 행군 속도 증가',
          previews: makeSkillPreviews('2%', '4%', '6%', '8%', '10%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '자유의 창',
      description: '',
      image: skillUrl + 'dragon_lancer-skill-3.png',
      skillPreviews: [
        {
          name: '기마병 공격력 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '철재 갑옷',
      description: '',
      image: skillUrl + 'dragon_lancer-skill-4.png',
      skillPreviews: [
        {
          name: '기마병 방어려 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
      ],
    },
  ],
};

export default temp;
