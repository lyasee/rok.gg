import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
// import {RANK_C_PLUS} from '../statics';

const COMMANDER_NAME = '토모에 고젠';

const temp = {
  name: COMMANDER_NAME,
  nickname: '낙양의 미인',
  image: 'https://vignette.wikia.nocookie.net/riseofcivilizations/images/8/87/Tomoe_Gozen.png/revision/latest/scale-to-width-down/310?cb=20181107165303',
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
      image: 'https://i0.wp.com/rocvn.com/wp-content/uploads/2018/10/54433372_261400134808599_2708997531861254144_o-1024x576.jpg?resize=700%2C394',
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
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/3/36/Commander_skill_Blood_Sakura.png/revision/latest/scale-to-width-down/64?cb=20181120191651',
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
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/d/d5/Commander_skill_Divine_Bow.png/revision/latest/scale-to-width-down/64?cb=20181120191659',
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
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/f/f4/Commander_skill_Beauty_in_Chaos.png/revision/latest/scale-to-width-down/64?cb=20181120191708',
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
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/d/d1/Commander_skill_Eternal_Love.png/revision/latest/scale-to-width-down/64?cb=20181120191716',
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
