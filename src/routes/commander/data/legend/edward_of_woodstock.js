import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_S, commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '에드워드 우드스톡';

const temp = {
  name: COMMANDER_NAME,
  nickname: '흑태자',
  image: commanderUrl + 'edward_of_woodstock.png',
  thumbnail: '',
  basePower: 1200,
  grade: RANK_S,
  rarity: '레전드',
  nation: '브리튼',
  specialties: {
    red: '궁병 유닛',
    yellow: '유동성',
    blue: '스킬',
  },
  talentTrees: [
    {
      title: '스킬 + 랠리',
      image: talentUrl + 'edward_of_woodstock-skill.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '궁수의 명예',
      description: '부사령관인 경우 피해량이 50% 감소합니다.',
      image: skillUrl + 'edward_of_woodstock-skill-1.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('1500', '1700', '1900', '2200', '2500'),
        },
        {
          name: '피해량(부사령관인 경우)',
          previews: makeSkillPreviews('750', '850', '950', '1100', '1250'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '복수의 십자군',
      description: '궁병 유닛 생명력, 행군 속도 상승',
      image: skillUrl + 'edward_of_woodstock-skill-2.png',
      skillPreviews: [
        {
          name: '궁병 유닛 행군 속도 상승',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
        {
          name: '궁병 유닛 생명력 증가',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '크래시 전투',
      description: '궁병으로만 구성 시 스킬 피해량 50% 증가, 보병 유닛에게 주는 피해 1% 증가',
      image: skillUrl + 'edward_of_woodstock-skill-3.png',
      skillPreviews: [
        {
          name: '스킬 피해량 증가',
          previews: makeSkillPreviews('5%', '10%', '15%', '20%', '25%'),
        },
        {
          name: '보병 유닛에게 주는 피해량 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '리모주의 급습',
      description: '병력이 70% 이상일 경우 공격력 %증가, 방어력 10% 감소',
      image: skillUrl + 'edward_of_woodstock-skill-4.png',
      skillPreviews: [
        {
          name: '궁병 공격력 증가',
          previews: makeSkillPreviews('15%', '20%', '25%', '30%', '40%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '모 아니면 도',
      description: '스킬 사용 후 2초 동안 일반 공격 및 반격 데미지 50% 증가',
      image: skillUrl + 'edward_of_woodstock-skill-5.png',
      beforeAwakening: '', // 각성 전
      afterAwakening: '', // 각성 후
      target: '',
      skillPreviews: [],
    },
  ],
};

export default temp;
