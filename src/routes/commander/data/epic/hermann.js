import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_C, commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '헤르만';

const temp = {
  name: COMMANDER_NAME,
  nickname: '토이토부르크의 해방자',
  image: commanderUrl + 'hermann.png',
  thumbnail: '',
  basePower: 600,
  grade: RANK_C,
  rarity: '에픽',
  nation: '독일',
  specialties: {
    red: '궁병 유닛',
    yellow: '주둔',
    blue: '스킬',
  },
  talentTrees: [
    {
      title: '극딜',
      image: talentUrl + 'kor/hermann-nuker.jpg',
    },
    {
      title: '주둔',
      image: talentUrl + 'kor/hermann-zu.jpg',
    },
    {
      title: '궁병',
      image: talentUrl + 'kor/hermann-arc.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '매복',
      description: '타깃에 막대한 피해를 주고(피해량 300) 타깃의 분노 50포인트 감소, 다음 2초 동안 타깃을 침묵 상태로 만듭니다.',
      image: skillUrl + 'hermann-skill-1.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('300', '370', '450', '600', '750'),
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
      name: '군사 천재',
      description: '궁병 공격력 3% 증가, 행군 속도가 1.5% 증가합니다.',
      image: skillUrl + 'hermann-skill-2.png',
      skillPreviews: [
        {
          name: '궁병 공격력 증가',
          previews: makeSkillPreviews('3%', '4.5%', '6%', '8%', '10%'),
        },
        {
          name: '궁병 행군 속도 증가',
          previews: makeSkillPreviews('1.5%', '3%', '5%', '7%', '10%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '토이토부르크의 전설',
      description: '주둔 부대 사령관 담당 시 주둔 부대와 경계탑의 공격력이 1% 증가합니다.',
      image: skillUrl + 'hermann-skill-3.png',
      skillPreviews: [
        {
          name: '주둔 부대/경계탑 공격력 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '5%', '7%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '민족 영웅',
      description: '통솔 부대가 일반 공격 시 피해 3% 증가, 2% 확률로 분노 100포인트를 추가 획득합니다.',
      image: skillUrl + 'hermann-skill-4.png',
      skillPreviews: [
        {
          name: '일반 공격력 피해량 증가',
          previews: makeSkillPreviews('3%', '4.5%', '6%', '8%', '10%'),
        },
        {
          name: '발동 확률',
          previews: makeSkillPreviews('2%', '4%', '6%', '8%', '10%'),
        },
      ],
    },
    {
      type: '강화',
      name: '막다른 길',
      description: '',
      image: skillUrl + 'hermann-skill-5.png',
      beforeAwakening: '타깃에 막대한 피해를 주고(피해량 750) 타깃의 분노 100포인트 감소, 다음 2초 동안 타깃을 침묵 상태로 만듭니다.', // 각성 전
      afterAwakening: '타깃에 막대한 피해를 주고(피해량 1150) 타깃의 분노 100포인트 감소, 다음 2초 동안 타깃을 침묵 상태로 만듭니다.', // 각성 후
      target: '매복',
      skillPreviews: [],
    },
  ],
};

export default temp;
