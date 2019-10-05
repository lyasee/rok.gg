import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';

const COMMANDER_NAME = '샤르카';

const temp = {
  name: COMMANDER_NAME,
  nickname: '죽음의 밀주',
  image: 'https://vignette.wikia.nocookie.net/riseofcivilizations/images/0/02/%C5%A0%C3%A1rka.png/revision/latest/scale-to-width-down/250?cb=20181107165217',
  thumbnail: '',
  basePower: 300,
  grade: '',
  rarity: '엘리트',
  nation: '기타',
  specialties: {
    red: '종합',
    yellow: '채집',
    blue: '스킬',
  },
  talentTrees: [
    {
      title: '채집',
      image: 'https://rok.guide/wp-content/uploads/2019/03/gatherer-1024x741.png',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '유혹',
      description: '',
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/5/5c/Commander_skill_Enchantment.png/revision/latest/scale-to-width-down/64?cb=20181120191425',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('75', '100', '125', '150', '200'),
        },
        {
          name: '행군 속도 감소',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '처녀의 전쟁',
      description: '',
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/8/8b/Commander_skill_The_Maidens%27_War.png/revision/latest/scale-to-width-down/64?cb=20181120191431',
      skillPreviews: [
        {
          name: '채집 속도 증가',
          previews: makeSkillPreviews('3%', '6%', '10%', '14%', '18%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '잃어버린 보물',
      description: '',
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/a/a0/Commander_skill_Lost_Treasure.png/revision/latest/scale-to-width-down/64?cb=20181120191512',
      skillPreviews: [
        {
          name: '적재량 증가',
          previews: makeSkillPreviews('5%', '10%', '15%', '20%', '30%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '단명의 여걸',
      description: '',
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/4/49/Commander_skill_Short-lived_Heroine.png/revision/latest/scale-to-width-down/64?cb=20181120191521',
      skillPreviews: [
        {
          name: '부대 인원 증가',
          previews: makeSkillPreviews('2%', '4%', '6%', '8%', '10%'),
        },
        {
          name: '공격력 감소',
          previews: makeSkillPreviews('2%', '4%', '6%', '8%', '10%'),
        },
      ],
    },
  ],
};

export default temp;
