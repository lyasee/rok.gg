import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '샤르카';

const temp = {
  name: COMMANDER_NAME,
  nickname: '죽음의 밀주',
  image: commanderUrl + 'sarka.png',
  thumbnail: '',
  basePower: 300,
  grade: '',
  rarity: '엘리트',
  nation: '기타',
  specialties: {
    red: '종합',
    yellow: '채집',
    blue: '스킬',
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
      name: '유혹',
      description: '',
      image: skillUrl + 'sarka-skill-1.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('75', '100', '125', '150', '200'),
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
      name: '처녀의 전쟁',
      description: '',
      image: skillUrl + 'sarka-skill-2.png',
      skillPreviews: [
        {
          name: '채집 속도 증가',
          previews: makeSkillPreviews('3%', '6%', '10%', '14%', '18%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '잃어버린 보물',
      description: '',
      image: skillUrl + 'sarka-skill-3.png',
      skillPreviews: [
        {
          name: '적재량 증가',
          previews: makeSkillPreviews('5%', '10%', '15%', '20%', '30%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '단명의 여걸',
      description: '',
      image: skillUrl + 'sarka-skill-4.png',
      skillPreviews: [
        {
          name: '부대 인원 증가',
          previews: makeSkillPreviews('2%', '4%', '6%', '8%', '10%'),
        },
        {
          name: '공격력 감소',
          previews: makeSkillPreviews('2%', '4%', '6%', '8%', '10%'),
        },
      ],
    },
  ],
};

export default temp;
