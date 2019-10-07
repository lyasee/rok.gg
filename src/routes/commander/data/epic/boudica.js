import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_C_PLUS, commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '부디카';

const temp = {
  name: COMMANDER_NAME,
  nickname: '켈트의 장미',
  image: commanderUrl + 'boudica.png',
  thumbnail: '',
  basePower: 600,
  grade: RANK_C_PLUS,
  rarity: '에픽',
  nation: '브리튼',
  specialties: {
    red: '종합',
    yellow: '야만',
    blue: '스킬',
  },
  talentTrees: [
    {
      title: '종합',
      image: talentUrl + 'kor/boudica-mix.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '선동자의 비명',
      description: '타깃에 막대한 피해를 주고 타깃의 분노 포인트 감소, 2초 동안 타깃 부대의 공격력이 감소합니다.',
      image: skillUrl + 'boudica-skill-1.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('225', '300', '375', '450', '600'),
        },
        {
          name: '공격력 감소',
          previews: makeSkillPreviews('10%', '13%', '16%', '20%', '25%'),
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
      name: '집단 전투',
      description: '통솔 부대가 야만인 또는 다른 중립 유닛에게 주는 피해가 증가, 야만인 또는 다른 중립 유닛 처치 시 사령관 경험치 획득량이 20% 증가합니다.',
      image: skillUrl + 'boudica-skill-2.png',
      skillPreviews: [
        {
          name: '야만인에게 주는 피해량 증가',
          previews: makeSkillPreviews('5%', '10%', '15%', '20%', '25%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '켈트 혈통',
      description: '스킬 시전 시 부디카가 분노 포인트 획득, 일부 경상 유닛을 치료합니다.',
      image: skillUrl + 'boudica-skill-3.png',
      skillPreviews: [
        {
          name: '분노 회복',
          previews: makeSkillPreviews('10', '20', '30', '40', '50'),
        },
        {
          name: '치료량',
          previews: makeSkillPreviews('150', '200', '250', '300', '400'),
        },
      ],
    },
    {
      type: '패시브',
      name: '이케니 여왕',
      description: '통솔 부대가 일반 공격 시 다음 과 같이 일정 확률로 적에게 주는 피해가 증가합니다.',
      image: skillUrl + 'boudica-skill-4.png',
      skillPreviews: [
        {
          name: '피해량 증가(5% 확률)',
          previews: makeSkillPreviews('10%', '20%', '30%', '40%', '50%'),
        },
        {
          name: '피해량 증가(3% 확률)',
          previews: makeSkillPreviews('20%', '40%', '60%', '80%', '100%'),
        },
        {
          name: '피해량 증가(2% 확률)',
          previews: makeSkillPreviews('30%', '60%', '90%', '120%', '150%'),
        },
      ],
    },
    {
      type: '강화',
      name: '선동의 외침',
      description: '',
      image: skillUrl + 'boudica-skill-5.png',
      beforeAwakening: '타깃에 막대한 피해를 주고(피해량 600) 타깃의 분노 100포인트 감소, 2초 동안 타깃 부대의 공격력이 25% 감소합니다.', // 각성 전
      afterAwakening: '타깃에 막대한 피해를 주고(피해량 1000) 타깃의 분노 100포인트 감소, 2초 동안 타깃 부대의 공격력이 25% 감소합니다.', // 각성 후
      target: '선동자의 비명',
      skillPreviews: [],
    },
  ],
};

export default temp;
