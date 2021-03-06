import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_B_MINUS, commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '구스노키 마사시게';

const temp = {
  name: COMMANDER_NAME,
  nickname: '무사도의 혼',
  image: commanderUrl + 'kusunoki_masashige.png',
  thumbnail: '',
  basePower: 600,
  grade: RANK_B_MINUS,
  rarity: '에픽',
  nation: '일본',
  specialties: {
    red: '궁병 유닛',
    yellow: '주둔',
    blue: '스킬',
  },
  talentTrees: [
    {
      title: '극딜',
      image: talentUrl + 'kor/kusunoki_masashige-nuker.jpg',
    },
    {
      title: '주둔',
      image: talentUrl + 'kor/kusunoki_masashige-zu.jpg',
    },
    {
      title: '궁병',
      image: talentUrl + 'kor/kusunoki_masashige-arc.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '칠생보국',
      description:
        '구스노키 마사시게 통솔 부대의 디버프 및 제어 효과가 사라집니다. 부채꼴 범위 내 최대 3개의 타깃에 막대한 피해를 주고, 2초 동안 추가 피해를 줍니다.',
      image: skillUrl + 'kusunoki_masashige-skill-1.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('150', '180', '210', '250', '300'),
        },
        {
          name: '추가 피해량',
          previews: makeSkillPreviews('100', '130', '160', '200', '250'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '충의지사',
      description: '주둔 부대 사령관 담당 시 주둔 부대의 반격 피해가 증가합니다.',
      image: skillUrl + 'kusunoki_masashige-skill-2.png',
      skillPreviews: [
        {
          name: '주둔 부대 반격 피해량 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '5%', '7%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '지용겸비',
      description: '궁병 유닛의 공격력 증가, 방어력이 증가합니다.',
      image: skillUrl + 'kusunoki_masashige-skill-3.png',
      skillPreviews: [
        {
          name: '궁병 공격력 증가',
          previews: makeSkillPreviews('4%', '5%', '6%', '8%', '10%'),
        },
        {
          name: '궁병 방어력 증가',
          previews: makeSkillPreviews('4%', '5%', '6%', '8%', '10%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '비극의 끝',
      description: '통솔 부대가 일반 공격시 10%의 확률로 타깃에게 2초 동안 1초마다 추가 피해를 줍니다.',
      image: skillUrl + 'kusunoki_masashige-skill-4.png',
      skillPreviews: [
        {
          name: '추가 피해량',
          previews: makeSkillPreviews('150', '200', '250', '350', '450'),
        },
      ],
    },
    {
      type: '강화',
      name: '사무라이의 혼',
      description: '',
      image: skillUrl + 'kusunoki_masashige-skill-5.png',
      beforeAwakening: '궁병 유닛의 공격력 10% 증가, 방어력이 10% 증가합니다.', // 각성 전
      afterAwakening: '궁병 유닛의 공격력 15% 증가, 방어력이 15% 증가합니다.', // 각성 후
      target: '지용 겸비',
      skillPreviews: [],
    },
  ],
};

export default temp;
