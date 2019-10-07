import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '백부장';

const temp = {
  name: COMMANDER_NAME,
  nickname: '독수리의 날개',
  image: commanderUrl + 'centurion.png',
  thumbnail: '',
  basePower: 150,
  grade: '',
  rarity: '우수',
  nation: '기타',
  specialties: {
    red: '종합',
    yellow: '채집',
    blue: '공격',
  },
  talentTrees: [
    {
      title: '채집 공통',
      image: talentUrl + 'gathering.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '혈전',
      description: '',
      image: skillUrl + 'centurion-skill-1.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('50', '60', '70', '80', '100'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '격앙',
      description: '',
      image: skillUrl + 'centurion-skill-2.png',
      skillPreviews: [
        {
          name: '방어력 증가',
          previews: makeSkillPreviews('1%', '1.5%', '2%', '2.5%', '3%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '군대 관리',
      description: '',
      image: skillUrl + 'centurion-skill-3.png',
      skillPreviews: [
        {
          name: '채집 속도 증가',
          previews: makeSkillPreviews('2%', '4%', '6%', '8%', '10%'),
        },
        {
          name: '적재량 증가',
          previews: makeSkillPreviews('2%', '4%', '6%', '8%', '10%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '용감한 전사',
      description: '',
      image: skillUrl + 'centurion-skill-4.png',
      skillPreviews: [
        {
          name: '부대 인원 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
      ],
    },
  ],
};

export default temp;
