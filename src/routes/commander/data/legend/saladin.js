import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_S} from '../statics';

const COMMANDER_NAME = '살라딘';

const temp = {
  name: COMMANDER_NAME,
  nickname: '알 말리크 안 나시르',
  image: 'https://vignette.wikia.nocookie.net/riseofcivilizations/images/2/2d/Saladin.png/revision/latest/scale-to-width-down/247?cb=20190217114036',
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
      image: 'https://rok.guide/wp-content/uploads/2019/06/saladin-talent-tree-1024x576.png',
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
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/7/78/Commander_skill_Hold_Fast.png/revision/latest/scale-to-width-down/64?cb=20190306203904',
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
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/a/a8/Commander_skill_Ghulams.png/revision/latest/scale-to-width-down/64?cb=20190306203918',
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
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/a/a1/Commander_skill_Bond_of_Fate.png/revision/latest/scale-to-width-down/64?cb=20190306203931',
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
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/4/48/Commander_skill_Generosity.png/revision/latest/scale-to-width-down/64?cb=20190306203943',
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
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/2/2b/Commander_skill_Praise_the_Creator.png/revision/latest/scale-to-width-down/64?cb=20190306204458',
      beforeAwakening: '타깃에 즉시 피해를 주고(피해량 1400), 5초 동안 타깃의 행군 속도 30% 감소, 치료 효과가 40% 감소합니다.', // 각성 전
      afterAwakening: '타깃에 즉시 피해를 주고(피해량 1700), 5초 동안 타깃의 행군 속도 50% 감소, 치료 효과가 50% 감소합니다.', // 각성 후
      target: '고삐 잡는 자',
      skillPreviews: [],
    },
  ],
};

export default temp;
