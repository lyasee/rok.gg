import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_A, commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '조조';

const temp = {
  name: COMMANDER_NAME,
  nickname: '난세의 영웅',
  image: commanderUrl + 'caocao.png',
  thumbnail: '',
  basePower: 1200,
  grade: RANK_A,
  rarity: '레전드',
  nation: '중국',
  specialties: {
    red: '기마병 유닛',
    yellow: '야만',
    blue: '기동',
  },
  talentTrees: [
    {
      title: '기마병',
      image: talentUrl + 'caocao-cavalry.jpg',
    },
    {
      title: '이동성',
      image: talentUrl + 'caocao-mobility.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '육룡승풍',
      description: '',
      image: skillUrl + 'caocao-skill-1.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('600', '800', '1000', '1200', '1400'),
        },
        {
          name: '공격력 감소',
          previews: makeSkillPreviews('20%', '25%', '30%', '35%', '40%'),
        },
        {
          name: '행군 속도 감소',
          previews: makeSkillPreviews('5%', '6%', '7%', '8%', '10%'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '청주병',
      description: '',
      image: skillUrl + 'caocao-skill-2.png',
      skillPreviews: [
        {
          name: '야만인에게 주는 피해량 증가',
          previews: makeSkillPreviews('10%', '20%', '30%', '40%', '50%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '용맹한 말',
      description: '',
      image: skillUrl + 'caocao-skill-3.png',
      skillPreviews: [
        {
          name: '기마병 행군 속도 증가',
          previews: makeSkillPreviews('3%', '4.5%', '6%', '8%', '10%'),
        },
        {
          name: '기마병 공격력 증가',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '높은 야망',
      description: '',
      image: skillUrl + 'caocao-skill-4.png',
      skillPreviews: [
        {
          name: '치료량',
          previews: makeSkillPreviews('500', '600', '700', '800', '1000'),
        },
        {
          name: '분노 회복',
          previews: makeSkillPreviews('50', '60', '70', '80', '100'),
        },
      ],
    },
    {
      type: '패시브',
      name: '위무제',
      description: '기마병 유닛의 공격력 25% 증가, 방어력이 10% 감소합니다.',
      image: skillUrl + 'caocao-skill-5.png',
      beforeAwakening: '', // 각성 전
      afterAwakening: '', // 각성 후
      target: '',
      skillPreviews: [],
    },
  ],
};

export default temp;
