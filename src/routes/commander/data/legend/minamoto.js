import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_A_PLUS, commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '미나모토노 요시쓰네';

const temp = {
  name: COMMANDER_NAME,
  nickname: '가마쿠라의 군신',
  image: commanderUrl + 'minamoto.png',
  thumbnail: '',
  basePower: 1200,
  grade: RANK_A_PLUS,
  rarity: '레전드',
  nation: '일본',
  specialties: {
    red: '기마병 유닛',
    yellow: '야만',
    blue: '스킬',
  },
  talentTrees: [
    {
      title: '극딜',
      image: talentUrl + 'minamoto-nuker.jpg',
    },
    {
      title: '기마병',
      image: talentUrl + 'minamoto-gi.jpg',
    },
    {
      title: '극딜 + 레벨',
      image: talentUrl + 'minamoto-level.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '경팔류',
      description: '',
      image: skillUrl + 'minamoto-skill-1.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('600', '800', '1000', '1200', '1400'),
        },
        {
          name: '추가 피해량',
          previews: makeSkillPreviews('200', '280', '360', '480', '600'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '구라마데라 수행',
      description: '',
      image: skillUrl + 'minamoto-skill-2.png',
      skillPreviews: [
        {
          name: '기마병 행군 속도 증가',
          previews: makeSkillPreviews('3%', '4.5%', '6%', '8%', '10%'),
        },
        {
          name: '기마병 공격력 증가',
          previews: makeSkillPreviews('10%', '12%', '14%', '16%', '20%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '검도의 고수',
      description: '',
      image: skillUrl + 'minamoto-skill-3.png',
      skillPreviews: [
        {
          name: '야만인에게 주는 피해량 증가',
          previews: makeSkillPreviews('10%', '20%', '30%', '40%', '50%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '명장',
      description: '',
      image: skillUrl + 'minamoto-skill-4.png',
      skillPreviews: [
        {
          name: '받은 피해량 증가',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
      ],
    },
    {
      type: '강화',
      name: '경팔류·극',
      description: '',
      image: skillUrl + 'minamoto-skill-5.png',
      beforeAwakening: '타깃에 즉시 피해를 주고 50%의 확률로 2초 동안 초당 추가 피해를 줍니다.', // 각성 전
      afterAwakening: '타깃에 즉시 피해를 주고 75%의 확률로 2초 동안 초당 추가 피해를 줍니다.', // 각성 후
      target: '경팔류',
      skillPreviews: [],
    },
  ],
};

export default temp;
