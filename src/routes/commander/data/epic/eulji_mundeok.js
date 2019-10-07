import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_B_MINUS, commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '을지문덕';

const eulji_mundeok = {
  name: COMMANDER_NAME,
  nickname: '무장의 풍모',
  image: commanderUrl + 'eulji_mundeok.png',
  thumbnail: '',
  basePower: 600,
  grade: RANK_B_MINUS,
  rarity: '에픽',
  nation: '한국',
  specialties: {
    red: '보병 유닛',
    yellow: '주둔',
    blue: '공격',
  },
  talentTrees: [
    {
      title: '필드, 쟁',
      image: talentUrl + 'eulji_mundeok-flag.png',
    },
    {
      title: '주둔지',
      image: talentUrl + 'kor/eulji_mundeok-zu.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '수공',
      description: '타깃에 막대한 피해를 주고(피해량 300), 2초 동안 타깃의 방어력이 10% 감소합니다.',
      image: skillUrl + 'eulji_mundeok-skill-1.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('300', '375', '450', '600', '750'),
        },
        {
          name: '방어력 감소',
          previews: makeSkillPreviews('10%', '15', '20%', '25%', '30%'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '견벽청야',
      description: '주둔 부대 사령관 담당 시 주둔 부대의 방어력이 1% 증가합니다.',
      image: skillUrl + 'eulji_mundeok-skill-2.png',
      skillPreviews: [
        {
          name: '방어력 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '살수대첩',
      description: '통솔 보병 유닛의 공격력 4% 증가, 방어력이 4% 증가합니다.',
      image: skillUrl + 'eulji_mundeok-skill-3.png',
      skillPreviews: [
        {
          name: '보병 공격력 증가',
          previews: makeSkillPreviews('4%', '5%', '6%', '8%', '10%'),
        },
        {
          name: '보병 방어력 증가',
          previews: makeSkillPreviews('4%', '5%', '6%', '8%', '10%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '반격',
      description: '을지문덕의 부대가 공격 받는 경우 10%의 확률로 다음 턴에 주는 피해가 20% 증가합니다.',
      image: skillUrl + 'eulji_mundeok-skill-4.png',
      skillPreviews: [
        {
          name: '명문 귀족',
          previews: makeSkillPreviews('20%', '40%', '60%', '80%', '100%'),
        },
      ],
    },
    {
      type: '강화',
      name: '전쟁과 평화',
      description: '',
      image: skillUrl + 'eulji_mundeok-skill-5.png',
      beforeAwakening: '통솔 보병 유닛의 공격력 10% 증가, 방어력이 10% 증가합니다.', // 각성 전
      afterAwakening: '통솔 보병 유닛의 공격력 15% 증가, 방어력이 15% 증가합니다.', // 각성 후
      target: '살수대첩',
      skillPreviews: [],
    },
  ],
};

export default eulji_mundeok;
