import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_C} from '../statics';

const COMMANDER_NAME = '오스만 1세';

const temp = {
  name: COMMANDER_NAME,
  nickname: '제국의 개척자',
  image: 'https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/Osman.png?fit=600%2C650&ssl=1',
  thumbnail: '',
  basePower: 600,
  grade: RANK_C,
  rarity: '에픽',
  nation: '오스만',
  specialties: {
    red: '리더십',
    yellow: '공성',
    blue: '스킬',
  },
  talentTrees: [
    {
      title: 'PVP',
      image: 'https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/Osman_I_talents_all_in_one.png?resize=%271024%2C577&ssl=1%27',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '제국의 각성',
      description: '',
      image: 'https://i1.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_HeroSkill80.png?w=810&ssl=1',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('400', '500', '600', '700', '850'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '부르사의 빛',
      description: '',
      image: 'https://i0.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_HeroSkill90.png?w=810&ssl=1',
      skillPreviews: [
        {
          name: '공격력 증가',
          previews: makeSkillPreviews('5%', '7%', '9%', '12%', '15%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '오스만의 검',
      description: '',
      image: 'https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_HeroSkill91.png?w=810&ssl=1',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('150', '200', '250', '300', '400'),
        },
      ],
    },
    {
      type: '패시브',
      name: '술탄의 영광',
      description: '',
      image: 'https://i0.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_HeroSkill92.png?w=810&ssl=1',
      skillPreviews: [
        {
          name: '부대 인원 증가',
          previews: makeSkillPreviews('2%', '4%', '6%', '8%', '10%'),
        },
      ],
    },
    {
      type: '강화',
      name: '제국의 부흥',
      description: '',
      image: 'https://i0.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_WakeUpHeroSkill21.png?w=810&ssl=1',
      beforeAwakening: '오스만이 검으로 강력한 공격을 해 타깃에 큰 피해를 줍니다. (피해량 850)', // 각성 전
      afterAwakening: '오스만이 전력을 다해 성스러운 검을 휘둘러 타깃에 큰 피해를 줍니다. (피해량 1000)', // 각성 후
      target: '제국의 각성',
      skillPreviews: [],
    },
  ],
};

export default temp;
