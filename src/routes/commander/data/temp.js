import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from './utils';

const COMMANDER_NAME = '';

const temp = {
  name: COMMANDER_NAME,
  nickname: '',
  image: '',
  thumbnail: '',
  basePower: 1200,
  grade: '',
  rarity: '레전드',
  nation: '',
  specialties: {
    red: '',
    yellow: '',
    blue: '',
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
      name: '',
      description: '',
      image: '',
      skillPreviews: [
        {
          name: '',
          previews: makeSkillPreviews(''),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '',
      description: '',
      image: '',
      skillPreviews: [
        {
          name: '',
          previews: makeSkillPreviews(''),
        },
      ],
    },
    {
      type: '패시브',
      name: '',
      description: '',
      image: '',
      skillPreviews: [
        {
          name: '',
          previews: makeSkillPreviews(''),
        },
      ],
    },
    {
      type: '패시브',
      name: '',
      description: '',
      image: '',
      skillPreviews: [
        {
          name: '',
          previews: makeSkillPreviews(''),
        },
      ],
    },
    {
      type: '강화',
      name: '',
      description: '',
      image: '',
      beforeAwakening: '', // 각성 전
      afterAwakening: '', // 각성 후
      target: '',
      skillPreviews: [],
    },
  ],
};

export default temp;
