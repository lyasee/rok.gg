import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '칭기즈칸';

const temp = {
  name: COMMANDER_NAME,
  nickname: '최초의 카간',
  image: commanderUrl + 'genghis_khan.png',
  thumbnail: '',
  basePower: 1200,
  grade: '',
  rarity: '레전드',
  nation: '기타',
  specialties: {
    red: '기마병 유닛',
    yellow: '유동성',
    blue: '스킬',
  },
  talentTrees: [
    {
      title: '필드',
      image: talentUrl + 'genghis_khan-mix.png',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '선택받은 자',
      description: '',
      image: skillUrl + 'genghis_khan-skill-1.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('800', '1000', '1200', '1400', '1700'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '스텝의 폭풍',
      description: '',
      image: skillUrl + 'genghis_khan-skill-2.png',
      skillPreviews: [
        {
          name: '필요한 분노 포인트 감소',
          previews: makeSkillPreviews('20', '40', '60', '80', '100'),
        },
        {
          name: '기마병 행군 속도 증가',
          previews: makeSkillPreviews('3%', '6%', '9%', '12%', '15%'),
        },
        {
          name: '행군 속도 감소',
          previews: makeSkillPreviews('30%', '25%', '20%', '15%', '10%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '유목 제국',
      description: '',
      image: skillUrl + 'genghis_khan-skill-3.png',
      skillPreviews: [
        {
          name: '피해량 증가',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '군사 생활',
      description: '',
      image: skillUrl + 'genghis_khan-skill-4.png',
      skillPreviews: [
        {
          name: '스킬 피해량 증가',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
        {
          name: '분노 회복',
          previews: makeSkillPreviews('5', '10', '15', '20', '25'),
        },
      ],
    },
    {
      type: '패시브',
      name: '제일가는 자',
      description:
        '통솔 부대가 기마병 유닛으로만 구성되고 "선택받은 자" 스킬을 사용하는 경우, 30% 확률로 "선택받은 자" 스킬(5레벨)을 즉시 다시 사용할 수 있습니다.',
      image: skillUrl + 'genghis_khan-skill-5.png',
      beforeAwakening: '', // 각성 전
      afterAwakening: '', // 각성 후
      target: '',
      skillPreviews: [],
    },
  ],
};

export default temp;
