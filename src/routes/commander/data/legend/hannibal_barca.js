import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_A} from '../statics';

const COMMANDER_NAME = '한니발 바르카';

const temp = {
  name: COMMANDER_NAME,
  nickname: '카르타고의 수호자',
  image: 'https://rok.guide/wp-content/uploads/2019/02/hannibal-barca-136x300.png',
  thumbnail: '',
  basePower: 1200,
  grade: RANK_A,
  rarity: '레전드',
  nation: '기타',
  specialties: {
    red: '리더십',
    yellow: '공성',
    blue: '공격',
  },
  talentTrees: [
    {
      title: '종합',
      image: 'https://www.gurugamer.ru/upload/000/u1/f/3/gannibal.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '카르타고 전투코끼리',
      description: '',
      image: 'https://rok.guide/images/war-elephants.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('150', '200', '250', '300', '400'),
        },
        {
          name: '피해량 감소',
          previews: makeSkillPreviews('10%', '13%', '16%', '20%', '25%'),
        },
        {
          name: '방어력 감소',
          previews: makeSkillPreviews('10%', '13%', '16%', '20%', '25%'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '포위 전술',
      description: '',
      image: 'https://rok.guide/images/envelopment-tactics.png',
      skillPreviews: [
        {
          name: '피해량 증가(2가지 유닛)',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
        {
          name: '피해량 증가(3가지 유닛)',
          previews: makeSkillPreviews('5%', '6%', '7%', '8%', '10%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '포위',
      description: '',
      image: 'https://rok.guide/images/siege-skill.png',
      skillPreviews: [
        {
          name: '치료량',
          previews: makeSkillPreviews('500', '600', '700', '800', '1000'),
        },
      ],
    },
    {
      type: '패시브',
      name: '원정',
      description: '',
      image: 'https://rok.guide/images/expedition.png',
      skillPreviews: [
        {
          name: '부대 인원 증가',
          previews: makeSkillPreviews('3%', '4.5%', '6%', '8%', '10%'),
        },
        {
          name: '피해량 증가',
          previews: makeSkillPreviews('5%', '7%', '9%', '12%', '15%'),
        },
      ],
    },
    {
      type: '강화',
      name: '전투코끼리 돌격',
      description: '',
      image: 'https://rok.guide/images/elephant-trample.png',
      beforeAwakening: '단일 타깃에 즉시 피해를 주고(피해량 400) 타깃이 5초 동안 주는 피해 25% 감소, 방어력이 25% 감소합니다.', // 각성 전
      afterAwakening:
        '단일 타깃에 즉시 피해를 주고(피해량 400) 전방의 타깃 3개에 다음 턴에 추가 피해를 줍니다.(피해량 300) 타깃 3개는 5초 동안 주는 피해 25% 감소, 방어력이 25% 감소합니다.', // 각성 후
      target: '카르타고 전투코끼리',
      skillPreviews: [],
    },
  ],
};

export default temp;
