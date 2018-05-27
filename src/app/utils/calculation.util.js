const filesComplexityMap = {
  lowestRet: 1,
  mediumRet: 6,
  mediumMaxDet: 50,
  mediumMinDet: 20,
};

const EOQComplexityMap = {
  lowestRet: 1,
  mediumRet: 4,
  mediumMaxDet: 19,
  mediumMinDet: 6,
};

const EIComplexityMap = {
  lowestRet: 1,
  mediumRet: 4,
  mediumMaxDet: 15,
  mediumMinDet: 5,
};

const complexity = {
  low: 0,
  medium: 1,
  high: 2,
};

const getComplexity = (ret, det, complexityMap) => {
  if (ret <= complexityMap.lowestRet) {
    return det > complexityMap.mediumMaxDet ? complexity.low : complexity.medium;
  } else if (ret < complexityMap.mediumRet) {
    const mediumOrMax = det <= complexityMap.mediumMaxDet ? complexity.medium : complexity.high;
    return det >= complexityMap.mediumMinDet ? mediumOrMax : complexity.low;
  }
  return det >= complexityMap.mediumMinDet ? complexity.high : complexity.medium;
};

const paramsWeight = {
  EI: { [complexity.low]: 3, [complexity.medium]: 4, [complexity.high]: 6 },
  EO: { [complexity.low]: 4, [complexity.medium]: 5, [complexity.high]: 7 },
  EQ: { [complexity.low]: 3, [complexity.medium]: 4, [complexity.high]: 6 },
  ILF: { [complexity.low]: 7, [complexity.medium]: 10, [complexity.high]: 15 },
  EIF: { [complexity.low]: 5, [complexity.medium]: 7, [complexity.high]: 6 },
};

const languages = {
  javaScript: 0,
  cPlusPlus: 1,
  java: 2,
  cSharp: 3,
};

const languageWeight = {
  [languages.cPlusPlus]: 80,
  [languages.java]: 134,
  [languages.javaScript]: 63,
  [languages.cSharp]: 70,
};

const calculateFPByLevel = (key, ret, det, map) => {
  const level = getComplexity(ret, det, map);
  return (Number(ret) + Number(det)) * paramsWeight[key][level];
};

const getFPByComplexity = (key, { ret, det }) => {
  switch (key) {
    case 'ILF':
    case 'EIF':
      return calculateFPByLevel(key, ret, det, filesComplexityMap);
    case 'EQ':
    case 'EO':
      return calculateFPByLevel(key, ret, det, EOQComplexityMap);
    case 'EI':
      return calculateFPByLevel(key, ret, det, EIComplexityMap);
    default:
      return 0;
  }
};

const calculatePureFP = files =>
  Object.keys(files).reduce((acc, curr) => acc + getFPByComplexity(curr, files[curr]), 0);

const calculateVAF = factors => {
  const sum = Object.keys(factors).reduce((acc, curr) => acc + Number(factors[curr].value), 0);
  return 0.65 + (sum / 100);
};

export const calculateFPLoc = (files, language, factors) =>
  calculatePureFP(files) * calculateVAF(factors) * languageWeight[language.value];

const levels = {
  xLow: 0,
  veryLow: 1,
  low: 2,
  normal: 3,
  high: 4,
  veryHigh: 5,
  xHigh: 6,
};

const bLevelsMap = {
  W1: {
    [levels.veryLow]: 6.2,
    [levels.low]: 4.96,
    [levels.normal]: 3.72,
    [levels.high]: 2.48,
    [levels.veryHigh]: 1.24,
    [levels.xHigh]: 0,
  },
  W2: {
    [levels.veryLow]: 5.07,
    [levels.low]: 4.05,
    [levels.normal]: 3.04,
    [levels.high]: 2.03,
    [levels.veryHigh]: 1.01,
    [levels.xHigh]: 0,
  },
  W3: {
    [levels.veryLow]: 7.07,
    [levels.low]: 5.65,
    [levels.normal]: 4.24,
    [levels.high]: 2.83,
    [levels.veryHigh]: 1.41,
    [levels.xHigh]: 0,
  },
  W4: {
    [levels.veryLow]: 5.48,
    [levels.low]: 4.38,
    [levels.normal]: 3.29,
    [levels.high]: 2.19,
    [levels.veryHigh]: 1.1,
    [levels.xHigh]: 0,
  },
  W5: {
    [levels.veryLow]: 7.8,
    [levels.low]: 6.24,
    [levels.normal]: 4.68,
    [levels.high]: 3.12,
    [levels.veryHigh]: 1.56,
    [levels.xHigh]: 0,
  },
};

const mLevelsMap = {
  PERS: {
    [levels.xLow]: 2.12,
    [levels.veryLow]: 1.62,
    [levels.low]: 1.26,
    [levels.normal]: 1.0,
    [levels.high]: 0.83,
    [levels.veryHigh]: 0.63,
    [levels.xHigh]: 0.5,
  },
  RCPX: {
    [levels.xLow]: 0.49,
    [levels.veryLow]: 0.6,
    [levels.low]: 0.83,
    [levels.normal]: 1.0,
    [levels.high]: 1.33,
    [levels.veryHigh]: 1.91,
    [levels.xHigh]: 2.72,
  },
  RUSE: {
    [levels.xLow]: 0,
    [levels.veryLow]: 0,
    [levels.low]: 0.95,
    [levels.normal]: 1.0,
    [levels.high]: 1.07,
    [levels.veryHigh]: 1.15,
    [levels.xHigh]: 1.24,
  },
  PDIF: {
    [levels.xLow]: 0,
    [levels.veryLow]: 0,
    [levels.low]: 0.87,
    [levels.normal]: 1.0,
    [levels.high]: 1.29,
    [levels.veryHigh]: 1.81,
    [levels.xHigh]: 2.61,
  },
  PREX: {
    [levels.xLow]: 1.59,
    [levels.veryLow]: 1.33,
    [levels.low]: 1.22,
    [levels.normal]: 1.0,
    [levels.high]: 0.87,
    [levels.veryHigh]: 0.74,
    [levels.xHigh]: 0.62,
  },
  FCIL: {
    [levels.xLow]: 1.43,
    [levels.veryLow]: 1.3,
    [levels.low]: 1.1,
    [levels.normal]: 1.0,
    [levels.high]: 0.87,
    [levels.veryHigh]: 0.73,
    [levels.xHigh]: 0.62,
  },
  SCED: {
    [levels.xLow]: 0,
    [levels.veryLow]: 1.43,
    [levels.low]: 1.14,
    [levels.normal]: 1.0,
    [levels.high]: 1.0,
    [levels.veryHigh]: 1.0,
    [levels.xHigh]: 0,
  },
};

const getB = params => {
  const sum = Object.keys(params).reduce((acc, cur) => {
    const { value: level } = params[cur] || {};
    return acc + bLevelsMap[cur][level];
  }, 0);
  return 0.91 + (0.01 * sum);
};

const getM = params =>
  Object.keys(params).reduce((acc, cur) => {
    const { value: level } = params[cur];
    return acc * mLevelsMap[cur][level];
  }, 1);

const bKeys = ['W1', 'W2', 'W3', 'W4', 'W5'];
const mKeys = ['PERS', 'RCPX', 'RUSE', 'PDIF', 'PREX', 'FCIL', 'SCED'];

export const calculateCocomo = (loc, params) => {
  const bParams = bKeys.filter(key => params[key]).map(key => params[key].value);
  const mParams = mKeys.filter(key => params[key]).map(key => params[key].value);
  const A = 2.94;
  const T = 3.67;
  const res = (A * ((loc / 1000) ** getB(bParams)) * getM(mParams)) + T;
  return res.toFixed();
};

export const calculateExpences = (staff, expences) => {
  const salarySum = Object.keys(staff)
    .reduce((acc, curr) => {
      const { time, count, salary } = staff[curr];
      return acc + (time * count * salary);
    }, 0);
  const { Income, ...rest } = expences;
  const otherExpences = Object.keys(rest)
    .reduce((acc, curr) => acc + ((rest[curr].value / 100) * Income.value), 0);
  return salarySum + otherExpences;
};
