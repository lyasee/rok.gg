import paris from './pairs';

// 스킬 레벨 별 증가, 감소량
export const makeSkillPreviews = (level1, level2, level3, level4, level5) => {
  return [
    {
      level: 1,
      number: level1,
    },
    {
      level: 2,
      number: level2,
    },
    {
      level: 3,
      number: level3,
    },
    {
      level: 4,
      number: level4,
    },
    {
      level: 5,
      number: level5,
    },
  ];
};

export const getSpecificityImage = specificity => {
  if (specificity === '리더십') {
    return 'https://rok.guide/images/leadership.png';
  } else if (specificity === '보병 유닛') {
    return 'https://rok.guide/images/infantry.png';
  } else if (specificity === '공성') {
    return 'https://rok.guide/images/siege.png';
  } else if (specificity === '공격') {
    return 'https://rok.guide/images/attack.png';
  } else if (specificity === '주둔') {
    return 'https://rok.guide/images/garrison.png';
  } else if (specificity === '종합') {
    return 'https://rok.guide/images/integration.png';
  } else if (specificity === '야만') {
    return 'https://rok.guide/images/gathering.png';
  } else if (specificity === '지원') {
    return 'https://rok.guide/images/support.png';
  } else if (specificity === '채집') {
    return 'https://rok.guide/images/gathering.png';
  } else if (specificity === '궁병 유닛') {
    return 'https://rok.guide/images/archer.png';
  } else if (specificity === '스킬') {
    return 'https://rok.guide/images/skill.png';
  } else if (specificity === '기마병 유닛') {
    return 'https://rok.guide/images/cavalry.png';
  } else if (specificity === '유동성') {
    return 'https://rok.guide/images/vesatility.png';
  } else if (specificity === '기동') {
    return 'https://rok.guide/images/mobility.png';
  } else {
    return '';
  }
};

export const getNationImage = nation => {
  if (nation === '로마') {
    return 'https://rok.guide/images/rome.png';
  } else if (nation === '한국') {
    return 'https://rok.guide/images/korea.png';
  } else if (nation === '아라비아') {
    return 'https://rok.guide/images/arabia.png';
  } else if (nation === '브리튼') {
    return 'https://rok.guide/images/britain.png';
  } else if (nation === '일본') {
    return 'https://rok.guide/images/japan-icon.png';
  } else if (nation === '중국') {
    return 'https://rok.guide/images/china.png';
  } else if (nation === '스페인') {
    return 'https://rok.guide/wp-content/uploads/2019/02/spain.png';
  } else if (nation === '독일') {
    return 'https://rok.guide/images/germany.png';
  } else if (nation === '프랑스') {
    return 'https://rok.guide/images/france.png';
  } else {
    return 'https://rok.guide/images/other.png';
  }
};

export const getPrimaryPairs = commander => {
  return paris.filter(v => v.primary.includes(commander)).sort((a, b) => a.rank - b.rank);
};

export const getSecondaryPairs = commander => {
  return paris.filter(v => v.secondary.includes(commander)).sort((a, b) => a.rank - b.rank);
};
