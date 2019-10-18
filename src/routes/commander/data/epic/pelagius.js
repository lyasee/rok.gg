import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_B, commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '펠라기우스';

const temp = {
  name: COMMANDER_NAME,
  nickname: '빼어난 부흥자',
  image: commanderUrl + 'pelagius.png',
  thumbnail: '',
  basePower: 600,
  grade: RANK_B,
  rarity: '에픽',
  nation: '스페인',
  specialties: {
    red: '기마병 유닛',
    yellow: '주둔',
    blue: '스킬',
  },
  talentTrees: [
    {
      title: '극딜',
      image: talentUrl + 'pelagius-nuker.jpg',
    },
    {
      title: '기마병',
      image: talentUrl + 'pelagius-gi.jpg',
    },
    {
      title: '주둔',
      image: talentUrl + 'pelagius-zu.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skillLevel: [
    {
      order: 1,
      desc: '5000 - 첫번째 스킬 5랩까지 별1개 유지',
    },
    {
      order: 2,
      desc: '5111 - 별4개로 업그레이드',
    },
    {
      order: 3,
      desc: '5555 - 보조로만 사용시 레벨업 중단, 메인인 경우 레벨업',
    },
  ],
  skills: [
    {
      type: '액티브',
      name: '전속 돌격',
      description: '타깃에 즉시 피해를 주고(피해랑 150) 2초 동안 매초 추가 피해를 줍니다.(피해량 150) 스킬 시전 후 분노 50포인트를 회복합니다.',
      image: skillUrl + 'pelagius-skill-1.png',
      skillPreviews: [
        {
          name: '즉시 피해량',
          previews: makeSkillPreviews('150', '180', '210', '250', '300'),
        },
        {
          name: '추가 피해량',
          previews: makeSkillPreviews('150', '180', '210', '250', '300'),
        },
        {
          name: '분노 회복',
          previews: makeSkillPreviews('50', '60', '70', '80', '100'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '아스투리아스의 선조',
      description: '통솔 기마병 유닛의 공격력 4% 증가, 방어력이 4% 증가합니다.',
      image: skillUrl + 'pelagius-skill-2.png',
      skillPreviews: [
        {
          name: '기마병 공격력 증가',
          previews: makeSkillPreviews('4%', '5%', '6%', '8%', '10%'),
        },
        {
          name: '기마병 방어력 증가',
          previews: makeSkillPreviews('4%', '5%', '6%', '8%', '10%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '영토 수복',
      description: '주둔 부대 사령관 담당 시 주둔 부대와 경계탑의 공격력이 1% 증가합니다.',
      image: skillUrl + 'pelagius-skill-3.png',
      skillPreviews: [
        {
          name: '주둔 부대/경계탑 공격력 증가',
          previews: makeSkillPreviews('1%', '2%', '3%', '4%', '5%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '반란자',
      description: '통솔 부대가 일반 공격 시 10%의 확률로 2초 동안 1초마다 일부 경상 유닛을 치료합니다.(치료량 150)',
      image: skillUrl + 'pelagius-skill-4.png',
      skillPreviews: [
        {
          name: '치료량',
          previews: makeSkillPreviews('150', '200', '250', '350', '450'),
        },
      ],
    },
    {
      type: '강화',
      name: '에수아의 맹세',
      description: '',
      image: skillUrl + 'pelagius-skill-5.png',
      beforeAwakening: '기마병 유닛의 공격력 10% 증가, 방어력이 10% 증가합니다.', // 각성 전
      afterAwakening: '기마병 유닛의 공격력 15% 증가, 방어력이 15% 증가합니다.', // 각성 후
      target: '아스투리아스의 선조',
      skillPreviews: [],
    },
  ],
};

export default temp;
