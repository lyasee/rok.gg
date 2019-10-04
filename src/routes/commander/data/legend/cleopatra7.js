import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';

const COMMANDER_NAME = '클레오파트라 7세';

const temp = {
  name: COMMANDER_NAME,
  nickname: '이집트의 여왕',
  image: 'https://rok.guide/wp-content/uploads/2019/02/cleopatra-96x300.png',
  thumbnail: '',
  basePower: 1200,
  grade: '',
  rarity: '레전드',
  nation: '기타',
  specialties: {
    red: '종합',
    yellow: '채집',
    blue: '지원',
  },
  talentTrees: [
    {
      title: '채집',
      image: 'https://i.ytimg.com/vi/fJJP14oo870/maxresdefault.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '만왕의 여왕',
      description: '',
      image: 'https://rok.guide/images/queen-of-kings.png',
      skillPreviews: [
        {
          name: '치료량',
          previews: makeSkillPreviews('150', '200', '250', '300', '400'),
        },
        {
          name: '방어력 증가',
          previews: makeSkillPreviews('5 %', '7%', '9%', '12%', '15%'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '프톨레마이오스의 종식',
      description: '',
      image: 'https://rok.guide/images/end-of-ptolemy.png',
      skillPreviews: [
        {
          name: '석재 채집 속도 증가',
          previews: makeSkillPreviews('5%', '10%', '15%', '20%', '30%'),
        },
        {
          name: '기타 자원 채집 속도 증가',
          previews: makeSkillPreviews('3%', '6%', '10%', '15%', '20%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '경국지색',
      description: '',
      image: 'https://rok.guide/images/beauty-of-wisdom.png',
      skillPreviews: [
        {
          name: '적재량 증가',
          previews: makeSkillPreviews('10%', '20%', '30%', '40%', '50%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '최후의 파라오',
      description: '',
      image: 'https://rok.guide/images/the-last-pharaoh.png',
      skillPreviews: [
        {
          name: '공성 유닛 공격력 증가',
          previews: makeSkillPreviews('10%', '20%', '30%', '40%', '50%'),
        },
        {
          name: '공성 유닛 방어력 증가',
          previews: makeSkillPreviews('10%', '20%', '30%', '40%', '50%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '나일강의 선물',
      description: '클레오파트라가 지도상의 자원지에서 자원을 채집 시 자원 아이템을 추가 획득합니다.',
      image: 'https://rok.guide/images/gifts-of-the-nile.png',
      beforeAwakening: '', // 각성 전
      afterAwakening: '', // 각성 후
      target: '',
      skillPreviews: [],
    },
  ],
};

export default temp;
