import {makeSkillPreviews, getPrimaryPairs, getSecondaryPairs} from '../utils';
import {RANK_C_PLUS} from '../statics';

const COMMANDER_NAME = '잔 다르크';

const temp = {
  name: COMMANDER_NAME,
  nickname: '오를레앙의 성처녀',
  image: 'https://rok.guide/wp-content/uploads/2019/02/joan-of-arc-179x300.png',
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
      image: 'https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/01/IMG_0597.jpg?resize=%271024%2C576&ssl=1%27',
    },
    {
      title: '지원',
      image: 'https://i0.wp.com/everythingrok.com/wp-content/uploads/2019/01/IMG_0598.jpg?resize=%271024%2C576&ssl=1%27',
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
      image: 'https://rok.guide/images/divine-revelation.png',
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
      image: 'https://rok.guide/images/maid-of-orleans.png',
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
      image: 'https://rok.guide/images/holy-refuge.png',
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
      image: 'https://rok.guide/images/saint.png',
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
      image: 'https://rok.guide/images/descent-of-the-goddess.png',
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
