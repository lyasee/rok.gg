import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';

const COMMANDER_NAME = '쿠스탄차';

const temp = {
  name: COMMANDER_NAME,
  nickname: '시칠리아 여왕',
  image: 'http://image.rok.gg/commander/constance.png',
  thumbnail: '',
  basePower: 300,
  grade: '',
  rarity: '엘리트',
  nation: '독일',
  specialties: {
    red: '종합',
    yellow: '채집',
    blue: '스킬',
  },
  talentTrees: [
    {
      title: '채집 공통',
      image: 'https://everythingrok.com/wp-content/uploads/2019/03/Tookies-Gathering-101-Large-1.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '발악의 독',
      description: '',
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/f/f6/Commander_skill_Struggling_Poison.png/revision/latest/scale-to-width-down/64?cb=20181120191834',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('50', '70', '90', '120', '150'),
        },
        {
          name: '추가 피해량',
          previews: makeSkillPreviews('50', '70', '90', '120', '150'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '섭정왕',
      description: '',
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/f/fc/Commander_skill_The_Regent.png/revision/latest/scale-to-width-down/64?cb=20181120191848',
      skillPreviews: [
        {
          name: '목재 채집 속도 증가',
          previews: makeSkillPreviews('3%', '6%', '10%', '15%', '20%'),
        },
        {
          name: '기타 자원 채집 속도 증가',
          previews: makeSkillPreviews('2%', '4%', '7%', '10%', '15%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '구지옥엽',
      description: '',
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/d/d9/Commander_skill_Loving_Mother.png/revision/latest/scale-to-width-down/64?cb=20181120191900',
      skillPreviews: [
        {
          name: '적재량 증가',
          previews: makeSkillPreviews('5%', '10%', '15%', '20%', '30%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '시칠리아 여왕',
      description: '',
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/6/62/Commander_skill_Queen_of_Sicily.png/revision/latest/scale-to-width-down/64?cb=20181120191908',
      skillPreviews: [
        {
          name: '추가 획득 자원',
          previews: makeSkillPreviews('2%', '4%', '6%', '8%', '10%'),
        },
      ],
    },
  ],
};

export default temp;
