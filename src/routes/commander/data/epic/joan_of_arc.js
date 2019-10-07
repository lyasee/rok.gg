import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_C_PLUS, commanderUrl, talentUrl, skillUrl} from '../statics';

const COMMANDER_NAME = '잔 다르크';

const temp = {
  name: COMMANDER_NAME,
  nickname: '오를레앙의 성처녀',
  image: commanderUrl + 'joan_of_arc.png',
  thumbnail: '',
  basePower: 600,
  grade: RANK_C_PLUS,
  rarity: '에픽',
  nation: '프랑스',
  specialties: {
    red: '종합',
    yellow: '채집',
    blue: '지원',
  },
  talentTrees: [
    {
      title: '채집',
      image: talentUrl + 'joan_of_arc-gat.jpg',
    },
    {
      title: '지원',
      image: talentUrl + 'joan_of_arc-arc.jpg',
    },
  ],
  pairs: {
    primary: getPrimaryPairs(COMMANDER_NAME),
    secondary: getSecondaryPairs(COMMANDER_NAME),
  },
  skills: [
    {
      type: '액티브',
      name: '신의 계시',
      description:
        '잔 다르크가 강력한 버프를 걸어 2초 동안 통솔 부대, 주변 아군 보병 유닛의 생명력 10% 증가, 기마병 유닛 방어력 10% 증가, 궁병 유닛 공격력이 10% 증가하며, 1초마다 분노 15포인트를 추가 획득합니다.',
      image: skillUrl + 'joan_of_arc-skill-1.png',
      skillPreviews: [
        {
          name: '보병 생명력 증가',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
        {
          name: '기마병 방어력 증가',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
        {
          name: '궁병 공격력 증가',
          previews: makeSkillPreviews('10%', '15%', '20%', '25%', '30%'),
        },
        {
          name: '분노 회복',
          previews: makeSkillPreviews('10', '15', '20', '25', '30'),
        },
      ],
      rageRequirement: 1000, // 액티브인 경우만 존재
    },
    {
      type: '패시브',
      name: '오를레앙의 성처녀',
      description: '부대 채집 속도 5% 증가, 적재량이 5% 증가합니다.',
      image: skillUrl + 'joan_of_arc-skill-2.png',
      skillPreviews: [
        {
          name: '채집 속도 증가',
          previews: makeSkillPreviews('5%', '10%', '15%', '20%', '25%'),
        },
        {
          name: '적재량 증가',
          previews: makeSkillPreviews('5%', '10%', '15%', '20%', '25%'),
        },
      ],
    },
    {
      type: '패시브',
      name: '신성비호',
      description: '통솔 부대가 일반 공격 시 10%의 확률로 일부 경상 유닛을 치료합니다.(치료량 150) 5초마다 최대 1번 발동합니다.',
      image: skillUrl + 'joan_of_arc-skill-3.png',
      skillPreviews: [
        {
          name: '치료량',
          previews: makeSkillPreviews('150', '200', '250', '350', '450'),
        },
      ],
    },
    {
      type: '패시브',
      name: '성인',
      description: '일반 공격이 주는 피해가 10% 증가합니다.',
      image: skillUrl + 'joan_of_arc-skill-4.png',
      skillPreviews: [
        {
          name: '일반 공격 피해량 증가',
          previews: makeSkillPreviews('10%', '13%', '16%', '20%', '25%'),
        },
      ],
    },
    {
      type: '강화',
      name: '성녀 강림',
      description: '',
      image: skillUrl + 'joan_of_arc-skill-5.png',
      beforeAwakening:
        '잔 다르크가 강력한 버프를 걸어 2초 동안 통솔 부대, 주변 아군 보병 유닛의 생명령 30% 증가, 기마병 유닛 방어력 30% 증가, 궁병 유닛 공격력이 30% 증가하며, 1초마다 분노 40포인트를 추가 획득합니다.', // 각성 전
      afterAwakening:
        '잔 다르크가 강력한 버프를 걸어 4초 동안 통솔 부대, 주변 아군 보병 유닛의 생명령 30% 증가, 기마병 유닛 방어력 30% 증가, 궁병 유닛 공격력이 30% 증가하며, 1초마다 분노 50포인트를 추가 획득합니다.', // 각성 후
      target: '신의 계시',
      skillPreviews: [],
    },
  ],
};

export default temp;
