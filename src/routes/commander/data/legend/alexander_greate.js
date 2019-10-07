import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_S_PLUS, commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '알렉산더 대왕';

const temp = {
  name: COMMANDER_NAME,
  nickname: '세계 정복자',
  image: commanderUrl + 'alexander_greate.png',
  thumbnail: '',
  basePower: 1200,
  grade: RANK_S_PLUS,
  rarity: '레전드',
  nation: '기타',
  specialties: {
    red: '보병 유닛',
    yellow: '유동성',
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
      name: '왕의 비호',
      description: '',
      image: skillUrl + 'alexander_greate-skill-1.png',
      skillPreviews: [
        {
          name: '방어막(자신)',
          previews: makeSkillPreviews('600', '700', '800', '1000', '1200'),
        },
        {
          name: '방어막(연맹)',
          previews: makeSkillPreviews('200', '300', '400', '500', '600'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '진정한 리더',
      description: '',
      image: skillUrl + 'alexander_greate-skill-2.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('800', '1000', '1200', '1400', '1700'),
        },
        {
          name: '치료 효과 감소',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '활제 출정',
      description: '',
      image: skillUrl + 'alexander_greate-skill-3.png',
      skillPreviews: [
        {
          name: '보병 유닛 행군 속도 상승',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
        {
          name: '보병 공격력 증가',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '카이로네이아',
      description: '',
      image: skillUrl + 'alexander_greate-skill-4.png',
      skillPreviews: [
        {
          name: '공격력 증가',
          previews: makeSkillPreviews('20%', '25%', '30%', '35%', '40%'),
        },
        {
          name: '방어력 증가',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
      ],
    },
    {
      type: '강화',
      name: '아문의 아들',
      description: '',
      image: skillUrl + 'alexander_greate-skill-5.png',
      beforeAwakening:
        '즉시 대량의 피해를 흡수할 수 있는 방패를  생성합니다.(데미지 계수 1200, 4초간 지속) 동시에 원형 범위 내에 남은 병력이 백분율 기준 가장 적은 아군 부대(알렉산더 대왕 통솔 부대 포함)에게 소량의 피해를 흡수할 수 있는 방패를 생성해줍니다.(데미지 계수 600, 2초간 지속)', // 각성 전
      afterAwakening:
        '즉시 대량의 피해를 흡수할 수 있는 방패를  생성합니다.(데미지 계수 1200, 4초간 지속) 동시에 원형 범위 내에 남은 병력이 백분율 기준 가장 적은 아군 부대(알렉산더 대왕 통솔 부대 포함)에게 소량의 피해를 흡수할 수 있는 방패를 생성해줍니다.(데미지 계수 600, 2초간 지속), 자신에게 방패를 생성 할 때 원 형 범위 내 최대 3개의 적군 목표가 받게 되는 데미지를 30% 증가시킵니다.(4초간 지속)', // 각성 후
      target: '왕의 비호',
      skillPreviews: [],
    },
  ],
};

export default temp;
