import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_A_MINUS, commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '애설플레드';

const temp = {
  name: COMMANDER_NAME,
  nickname: '머시아의 왕비',
  image: commanderUrl + 'aethelflaed.png',
  thumbnail: '',
  basePower: 1200,
  grade: RANK_A_MINUS,
  rarity: '레전드',
  nation: '브리튼',
  specialties: {
    red: '리더십',
    yellow: '야만',
    blue: '지원',
  },
  talentTrees: [
    {
      title: '이동속도',
      image: talentUrl + 'aethelflaed-mo.jpg',
    },
    {
      title: '공격',
      image: talentUrl + 'aethelflaed-power.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '철화살',
      description: '',
      image: '',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('400', '500', '600', '700', '800'),
        },
        {
          name: '공격력, 방어력, 생명력 감소',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '번개와 같은 기세',
      description: '',
      image: '',
      skillPreviews: [
        {
          name: '받은 반격 피해 감소',
          previews: makeSkillPreviews('5%', '8%', '11%', '15%', '20%'),
        },
        {
          name: '기마병 유닛 행군 속도 감소',
          previews: makeSkillPreviews('20%', '25%', '30%', '40%', '50%'),
        },
        {
          name: '기타 병력 행군 속도 감소',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '영웅 집결',
      description: '',
      image: '',
      skillPreviews: [
        {
          name: '야만인에게 주는 피해량 증가',
          previews: makeSkillPreviews('5%', '10%', '17%', '25%', '35%'),
        },
        {
          name: '경험치 증가',
          previews: makeSkillPreviews('5%', '10%', '17%', '25%', '35%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '',
      description: '',
      image: '',
      skillPreviews: [
        {
          name: '연맹 집결 부대 인원 증가',
          previews: makeSkillPreviews('2%', '4%', '6%', '8%', '10%'),
        },
        {
          name: '피해량 증가(3가지 유닛) ',
          previews: makeSkillPreviews('5%', '8%', '11%', '15%', '20%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '전쟁의 여왕',
      description: '감속 효과를 받고 있는 목표로 추가로 20% 데미지를 입힙니다.',
      image: '',
      beforeAwakening: '', // 각성 전
      afterAwakening: '', // 각성 후
      target: '',
      skillPreviews: [],
    },
  ],
};

export default temp;
