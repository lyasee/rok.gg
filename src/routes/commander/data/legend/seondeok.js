import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';

const COMMANDER_NAME = '선덕';

const temp = {
  name: COMMANDER_NAME,
  nickname: '신라의 왕',
  image: 'https://vignette.wikia.nocookie.net/riseofcivilizations/images/1/10/Seondeok.png/revision/latest/scale-to-width-down/74?cb=20190926195853',
  thumbnail: '',
  basePower: 1200,
  grade: '',
  rarity: '레전드',
  nation: '한국',
  specialties: {
    red: '종합',
    yellow: '채집',
    blue: '공격',
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
      name: '겸손의 미덕',
      description: '',
      image: '',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('600', '800', '1000', '1200', '1400'),
        },
        {
          name: '분노 감소',
          previews: makeSkillPreviews('50', '60', '70', '80', '100'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '통찰력',
      description: '',
      image: '',
      skillPreviews: [
        {
          name: '금화 채집 속도 증가',
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
      name: '관대',
      description: '',
      image: '',
      skillPreviews: [
        {
          name: '공성 유닛 방어력 증가',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
        {
          name: '공성 유닛 생명력 보너스',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '일도양단',
      description: '',
      image: '',
      skillPreviews: [
        {
          name: '추가 피해량',
          previews: makeSkillPreviews('500', '600', '700', '800', '1000'),
        },
      ],
    },
    {
      type: '패시브',
      name: '영광의 하늘',
      description: '공성 유닛의 적재량 30 증가, 수집 완료 시 10%의 추가 자원을 획득합니다.',
      image: '',
      beforeAwakening: '', // 각성 전
      afterAwakening: '', // 각성 후
      target: '',
      skillPreviews: [],
    },
  ],
};

export default temp;
