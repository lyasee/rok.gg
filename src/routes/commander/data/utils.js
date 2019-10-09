import paris, {shinchi2, detectiveG} from './pairs';
import {specificityUrl, nationUrl} from './statics';

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
    return specificityUrl + 'leadership.png';
  } else if (specificity === '보병 유닛') {
    return specificityUrl + 'infantry.png';
  } else if (specificity === '공성') {
    return specificityUrl + 'siege.png';
  } else if (specificity === '공격') {
    return specificityUrl + 'attack.png';
  } else if (specificity === '주둔') {
    return specificityUrl + 'garrison.png';
  } else if (specificity === '종합') {
    return specificityUrl + 'integration.png';
  } else if (specificity === '야만') {
    return specificityUrl + 'gathering.png';
  } else if (specificity === '지원') {
    return specificityUrl + 'support.png';
  } else if (specificity === '채집') {
    return specificityUrl + 'gathering.png';
  } else if (specificity === '궁병 유닛') {
    return specificityUrl + 'archer.png';
  } else if (specificity === '스킬') {
    return specificityUrl + 'skill.png';
  } else if (specificity === '기마병 유닛') {
    return specificityUrl + 'cavalry.png';
  } else if (specificity === '유동성') {
    return specificityUrl + 'vesatility.png';
  } else if (specificity === '기동') {
    return specificityUrl + 'mobility.png';
  } else {
    return '';
  }
};

export const getNationImage = nation => {
  if (nation === '로마') {
    return nationUrl + 'rome.png';
  } else if (nation === '한국') {
    return nationUrl + 'korea.png';
  } else if (nation === '아라비아') {
    return nationUrl + 'arabia.png';
  } else if (nation === '브리튼') {
    return nationUrl + 'britain.png';
  } else if (nation === '일본') {
    return nationUrl + 'japan-icon.png';
  } else if (nation === '중국') {
    return nationUrl + 'china.png';
  } else if (nation === '스페인') {
    return nationUrl + 'spain.png';
  } else if (nation === '독일') {
    return nationUrl + 'germany.png';
  } else if (nation === '프랑스') {
    return nationUrl + 'france.png';
  } else {
    return nationUrl + 'other.png';
  }
};

export const getPrimaryPairs = (commander, type) => {
  if (type === 1) {
    return detectiveG.filter(v => v.primary.includes(commander)).sort((a, b) => a.rank - b.rank);
  } else if (type === 2) {
    return shinchi2.filter(v => v.primary.includes(commander)).sort((a, b) => a.rank - b.rank);
  } else {
    return paris.filter(v => v.primary.includes(commander)).sort((a, b) => a.rank - b.rank);
  }
};

export const getSecondaryPairs = (commander, type) => {
  if (type === 1) {
    return detectiveG.filter(v => v.secondary.includes(commander)).sort((a, b) => a.rank - b.rank);
  } else if (type === 2) {
    return shinchi2.filter(v => v.secondary.includes(commander)).sort((a, b) => a.rank - b.rank);
  } else {
    return paris.filter(v => v.secondary.includes(commander)).sort((a, b) => a.rank - b.rank);
  }
};
