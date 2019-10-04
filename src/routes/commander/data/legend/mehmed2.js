import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';

const COMMANDER_NAME = '메흐메트 2세';

const temp = {
  name: COMMANDER_NAME,
  nickname: '이스탄불의 정복자',
  image: 'https://vignette.wikia.nocookie.net/riseofcivilizations/images/8/80/Mehmed_II.png/revision/latest/scale-to-width-down/278?cb=20190217114048',
  thumbnail: '',
  basePower: 1200,
  grade: '',
  rarity: '레전드',
  nation: '오스만',
  specialties: {
    red: '리더십',
    yellow: '공성',
    blue: '스킬',
  },
  talentTrees: [
    {
      title: 'PVP',
      image: 'https://www.gurugamer.ru/upload/000/u1/0/1/mahmed-pvp.jpg',
    },
    {
      title: '랠리',
      image: 'https://www.gurugamer.ru/upload/000/u1/f/7/mahmed-rally-siege.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '오스만 대포',
      description: '',
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/0/04/Commander_skill_Ottoman_Cannons.png/revision/latest/scale-to-width-down/64?cb=20190305094349',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('450', '600', '700', '950', '1150'),
        },
        {
          name: '추가 피해량',
          previews: makeSkillPreviews('300', '400', '500', '600', '700'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '대지와 바다의 군주',
      description: '',
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/1/1e/Commander_skill_Lord_of_Land_and_Sea.png/revision/latest/scale-to-width-down/64?cb=20190305094411',
      skillPreviews: [
        {
          name: '공격력 증가',
          previews: makeSkillPreviews('8%', '10%', '12%', '16%', '20%'),
        },
        {
          name: '스킬 피해량 증가',
          previews: makeSkillPreviews('8%', '10%', '12%', '16%', '20%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '파티흐',
      description: '',
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/8/8c/Commander_skill_Faith.png/revision/latest/scale-to-width-down/64?cb=20190305095024',
      skillPreviews: [
        {
          name: '추가 피해량',
          previews: makeSkillPreviews('500', '600', '700', '800', '1000'),
        },
      ],
    },
    {
      type: '패시브',
      name: '성군',
      description: '',
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/c/cd/Commander_skill_Sage_King.png/revision/latest/scale-to-width-down/64?cb=20190305095018',
      skillPreviews: [
        {
          name: '부대 인원 증가',
          previews: makeSkillPreviews('2%', '4%', '6%', '8%', '10%'),
        },
        {
          name: '연맹 집결 부대 인원 증가',
          previews: makeSkillPreviews('2%', '4%', '6%', '8%', '10%'),
        },
      ],
    },
    {
      type: '강화',
      name: '오르반 폭격',
      description: '',
      image:
        'https://vignette.wikia.nocookie.net/riseofcivilizations/images/1/18/Commander_skill_Orban_Bombard.png/revision/latest/scale-to-width-down/64?cb=20190305094754',
      beforeAwakening:
        '정면 부채꼴 범위 내의 적에 피해를 줍니다.(피해량 1150, 최대 타깃 5개) 타깃이 추가될 때마다 각 타깃이 받는 피해는 15% 감소합니다. 해당 스킬은 도시 주둔 부대와 경계탑에 추가 피해를 줍니다.(피해량 700)', // 각성 전
      afterAwakening:
        '정면 부채꼴 범위 내의 적에 피해를 줍니다.(피해량 1350, 최대 타깃 5개) 타깃이 추가될 때마다 각 타깃이 받는 피해는 15% 감소합니다. 해당 스킬은 도시 주둔 부대와 경계탑에 추가 피해를 줍니다.(피해량 800) 추가로 50%의 확률로 도시 주둔 부대와 경계탑에 두 번째로 추가 피해를 줍니다.(피해량 500)', // 각성 후
      target: '오스만 대포',
      skillPreviews: [],
    },
  ],
};

export default temp;
