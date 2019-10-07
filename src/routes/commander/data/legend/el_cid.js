import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_S_MINUS} from '../statics';

const COMMANDER_NAME = '엘 시드';

const temp = {
  name: COMMANDER_NAME,
  nickname: '신성의 영주',
  image: 'http://image.rok.gg/commander/el_cid.png',
  thumbnail: '',
  basePower: 1200,
  grade: RANK_S_MINUS,
  rarity: '레전드',
  nation: '스페인',
  specialties: {
    red: '궁병 유닛',
    yellow: '유동성',
    blue: '스킬',
  },
  talentTrees: [
    {
      title: '궁병',
      image: 'https://www.gurugamer.ru/upload/000/u1/a/f/cid-archery.jpg',
    },
    {
      title: '극딜',
      image: 'https://www.gurugamer.ru/upload/000/u1/f/0/cid-nuker.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '유명한 전사',
      description: '',
      image: 'https://rok.guide/images/famous-warrior.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('500', '600', '700', '800', '1000'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '엘 시드의 노래',
      description: '',
      image: 'https://rok.guide/images/poem-of-el-cid.png',
      skillPreviews: [
        {
          name: '추가 피해량',
          previews: makeSkillPreviews('500', '600', '700', '800', '1000'),
        },
      ],
    },
    {
      type: '패시브',
      name: '발렌시아의 수호자',
      description: '',
      image: 'https://rok.guide/images/guardian-of-valencia.png',
      skillPreviews: [
        {
          name: '궁병 방어력 증가',
          previews: makeSkillPreviews('10%', '12%', '14%', '16%', '20%'),
        },
        {
          name: '궁병 행군 속도 증가',
          previews: makeSkillPreviews('5%', '7%', '9%', '12%', '15%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '칠전팔기',
      description: '',
      image: 'https://rok.guide/images/unyielding.png',
      skillPreviews: [
        {
          name: '피해량 증가',
          previews: makeSkillPreviews('5%', '10%', '15%', '20%', '25%'),
        },
        {
          name: '행군 속도 증가',
          previews: makeSkillPreviews('5%', '10%', '15%', '20%', '25%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '폭주',
      description: '궁병 유닛의 공격력 5% 증가, 방어력 5% 증가, 궁병 유닛이 보병 유닛에게 주는 피해가 2% 증가합니다.',
      image: 'https://rok.guide/images/out-of-control.png',
      beforeAwakening: '', // 각성 전
      afterAwakening: '', // 각성 후
      target: '',
      skillPreviews: [],
    },
  ],
};

export default temp;
