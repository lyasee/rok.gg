import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_S, commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '살라딘';

const temp = {
  name: COMMANDER_NAME,
  nickname: '알 말리크 안 나시르',
  image: commanderUrl + 'saladin1.png',
  thumbnail: '',
  basePower: 1200,
  grade: RANK_S,
  rarity: '레전드',
  nation: '아라비아',
  specialties: {
    red: '기마병 유닛',
    yellow: '공성',
    blue: '지원',
  },
  talentTrees: [
    {
      title: '필드',
      image: talentUrl + 'saladin-field.png',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '고삐 잡는 자',
      description: '',
      image: skillUrl + 'saladin-skill-1.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('600', '800', '1000', '1200', '1400'),
        },
        {
          name: '행군 속도 감소',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
        {
          name: '치료 효과 감소',
          previews: makeSkillPreviews('20%', '25%', '30%', '35%', '40%'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '굴람',
      description: '',
      image: skillUrl + 'saladin-skill-2.png',
      skillPreviews: [
        {
          name: '기마병 방어력 증가',
          previews: makeSkillPreviews('8%', '10%', '12%', '16%', '20%'),
        },
        {
          name: '기마병 공격력 증가',
          previews: makeSkillPreviews('8%', '10%', '12%', '16%', '20%'),
        },
        {
          name: '기마병 행군 속도 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '운명의 족쇄',
      description: '',
      image: skillUrl + 'saladin-skill-3.png',
      skillPreviews: [
        {
          name: '받은 스킬 피해 감소',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
        {
          name: '받은 반격 피해 감소',
          previews: makeSkillPreviews('8%', '10%', '12%', '16%', '20%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '관용',
      description: '',
      image: skillUrl + 'saladin-skill-4.png',
      skillPreviews: [
        {
          name: '피해량 증가',
          previews: makeSkillPreviews('3%', '6%', '9%', '12%', '15%'),
        },
      ],
    },
    {
      type: '강화',
      name: '창조주 찬양',
      description: '',
      image: skillUrl + 'saladin-skill-5.png',
      beforeAwakening: '타깃에 즉시 피해를 주고(피해량 1400), 5초 동안 타깃의 행군 속도 30% 감소, 치료 효과가 40% 감소합니다.', // 각성 전
      afterAwakening: '타깃에 즉시 피해를 주고(피해량 1700), 5초 동안 타깃의 행군 속도 50% 감소, 치료 효과가 50% 감소합니다.', // 각성 후
      target: '고삐 잡는 자',
      skillPreviews: [],
    },
  ],
};

export default temp;
