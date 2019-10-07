import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';

const COMMANDER_NAME = '가이우스 마리우스';

const temp = {
  name: COMMANDER_NAME,
  nickname: '군단 변혁가',
  image: 'http://image.rok.gg/commander/gaius_marius.png',
  thumbnail: '',
  basePower: 300,
  grade: '',
  rarity: '엘리트',
  nation: '로마',
  specialties: {
    red: '리더십',
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
      name: '이탈리아의 구세주',
      description: '',
      image: 'https://rok.guide/images/savior-of-italy.png',
      skillPreviews: [
        {
          name: '치료량',
          previews: makeSkillPreviews('50', '70', '90', '120', '150'),
        },
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('50', '70', '90', '120', '150'),
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
      name: '제국의 창시자',
      description: '',
      image: 'https://rok.guide/images/founder-of-empire.png',
      skillPreviews: [
        {
          name: '식량 채집 속도 증가',
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
      name: '마리우스의 개혁',
      description: '',
      image: 'https://rok.guide/images/marius-reform.png',
      skillPreviews: [
        {
          name: '적재량 증가',
          previews: makeSkillPreviews('5%', '10%', '15%', '20%', '30%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '누미디아의 정복자',
      description: '',
      image: 'https://rok.guide/images/marius-reform.png',
      skillPreviews: [
        {
          name: '공성 유닛 행군 속도 증가',
          previews: makeSkillPreviews('2%', '4%', '7%', '10%', '15%'),
        },
        {
          name: '비율 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
      ],
    },
  ],
};

export default temp;