import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_C_PLUS} from '../statics';

const COMMANDER_NAME = '바이바르스';

const temp = {
  name: COMMANDER_NAME,
  nickname: '정복의 아버지',
  image: 'http://image.rok.gg/commander/baibars.png',
  thumbnail: '',
  basePower: 600,
  grade: RANK_C_PLUS,
  rarity: '에픽',
  nation: '아라비아',
  specialties: {
    red: '기마병 유닛',
    yellow: '공성',
    blue: '스킬',
  },
  talentTrees: [
    {
      title: '극딜',
      image: 'https://i1.wp.com/everythingrok.com/wp-content/uploads/2019/03/Beibars_Talents_SKILL.png?resize=%271024%2C577&ssl=1%27',
    },
    {
      title: '기마병',
      image: 'https://i0.wp.com/everythingrok.com/wp-content/uploads/2019/03/Beibars_Talents_CAVALRY.png?resize=%271024%2C577&ssl=1%27',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '모래폭풍',
      description: '정면 부채꼴 범위 내의 적에 막대한 피해를 줍니다.(최대 타깃 3개) 2초 동안 타깃의 행군 속도가 감소합니다.',
      image: 'https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_HeroSkill79.png?w=810&ssl=1',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('300', '375', '450', '600', '750'),
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
      name: '아라비안 나이트',
      description: '기마병 유닛의 공격력이 증가합니다.',
      image: 'https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_HeroSkill87.png?w=810&ssl=1',
      skillPreviews: [
        {
          name: '기마병 공격력 증가',
          previews: makeSkillPreviews('8%', '10%', '12%', '16%', '20%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '탈출 불가',
      description: '도시를 일반 공격 시 100% 확률로 주둔 부대의 공격력 감소, 방어력이 감소합니다.',
      image: 'https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_HeroSkill88.png?w=810&ssl=1',
      skillPreviews: [
        {
          name: '공격력 감소',
          previews: makeSkillPreviews('1%', '2%', '3%', '5%', '7% '),
        },
        {
          name: '방어력 감소',
          previews: makeSkillPreviews('1%', '2%', '3%', '5%', '7% '),
        },
      ],
    },
    {
      type: '패시브',
      name: '위대한 흑표범',
      description: '전투를 떠날 때(패전 후퇴가 아닌 경우) 일부 경상 유닛을 치료, 10초 동안 행군 속도가 증가합니다.',
      image: 'https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_HeroSkill89.png?w=810&ssl=1',
      skillPreviews: [
        {
          name: '치료량',
          previews: makeSkillPreviews('75', '100', '125', '150', '200 '),
        },
        {
          name: '행군 속도 증가',
          previews: makeSkillPreviews('20%', '25%', '30%', '40%', '50%'),
        },
      ],
    },
    {
      type: '강화',
      name: '태양을 가리는 힘',
      description: '',
      image: 'https://i1.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_WakeUpHeroSkill20.png?w=810&ssl=1',
      beforeAwakening: '정면 부채꼴 범위 내의 적에 막대한 피해를 줍니다.(피해량 750, 최대 타깃 3개) 2초 동안 타깃의 행군 속도가 30% 감소합니다.', // 각성 전
      afterAwakening: '정면 부채꼴 범위 내의 적에 막대한 피해를 줍니다.(피해량 1000, 최대 타깃 5개) 2초 동안 타깃의 행군 속도가 50% 감소합니다.', // 각성 후
      target: '모래폭풍',
      skillPreviews: [],
    },
  ],
};

export default temp;
