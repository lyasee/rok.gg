import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';

const COMMANDER_NAME = '칭기즈칸';

const temp = {
  name: COMMANDER_NAME,
  nickname: '최초의 카간',
  image: 'https://vignette.wikia.nocookie.net/riseofcivilizations/images/e/e3/Genghis_Khan.png/revision/latest/scale-to-width-down/310?cb=20190505172506',
  thumbnail: '',
  basePower: 1200,
  grade: '',
  rarity: '레전드',
  nation: '기타',
  specialties: {
    red: '기마병 유닛',
    yellow: '유동성',
    blue: '스킬',
  },
  talentTrees: [
    {
      title: '',
      image: '',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '선택받은 자',
      description: '',
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/c/ce/Commander_skill_Chosen_One.png/revision/latest/scale-to-width-down/64?cb=20190424194049',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('800', '1000', '1200', '1400', '1700'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '스텝의 폭풍',
      description: '',
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/a/a9/Commander_skill_Cyclone_of_the_Steppes.png/revision/latest/scale-to-width-down/64?cb=20190424194056',
      skillPreviews: [
        {
          name: '필요한 분노 포인트 감소',
          previews: makeSkillPreviews('20', '40', '60', '80', '100'),
        },
        {
          name: '기마병 행군 속도 증가',
          previews: makeSkillPreviews('3%', '6%', '9%', '12%', '15%'),
        },
        {
          name: '행군 속도 감소',
          previews: makeSkillPreviews('30%', '25%', '20%', '15%', '10%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '유목 제국',
      description: '',
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/4/40/Commander_skill_Nomandic_Empire.png/revision/latest/scale-to-width-down/64?cb=20190424194240',
      skillPreviews: [
        {
          name: '피해량 증가',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '군사 생활',
      description: '',
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/f/fb/Commander_skill_Military_Lifestyle.png/revision/latest/scale-to-width-down/64?cb=20190424194248',
      skillPreviews: [
        {
          name: '스킬 피해량 증가',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
        {
          name: '분노 회복',
          previews: makeSkillPreviews('5', '10', '15', '20', '25'),
        },
      ],
    },
    {
      type: '패시브',
      name: '제일가는 자',
      description:
        '통솔 부대가 기마병 유닛으로만 구성되고 "선택받은 자" 스킬을 사용하는 경우, 30% 확률로 "선택받은 자" 스킬(5레벨)을 즉시 다시 사용할 수 있습니다.',
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/7/7e/Commander_skill_Second_to_None.png/revision/latest/scale-to-width-down/64?cb=20190424194134',
      beforeAwakening: '', // 각성 전
      afterAwakening: '', // 각성 후
      target: '',
      skillPreviews: [],
    },
  ],
};

export default temp;
