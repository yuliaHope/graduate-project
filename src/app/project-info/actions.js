// import axios from 'axios';

export const REQUEST_FP = 'REQUEST_FP';
export const RECEIVE_FP = 'RECEIVE_FP';
export const REQUEST_COCOMO = 'REQUEST_COCOMO';
export const RECEIVE_COCOMO = 'RECEIVE_COCOMO';
export const REQUEST_EXPERT = 'REQUEST_EXPERT';
export const RECEIVE_EXPERT = 'RECEIVE_EXPERT';

export const requestFP = key => ({
  type: REQUEST_FP,
  key,
});

export const receiveFP = payload => ({
  type: RECEIVE_FP,
  ...payload,
});

export const requestCocomo = key => ({
  type: REQUEST_COCOMO,
  key,
});

export const receiveCocomo = payload => ({
  type: RECEIVE_COCOMO,
  ...payload,
});

export const requestExpert = key => ({
  type: REQUEST_EXPERT,
  key,
});

export const receiveExpert = payload => ({
  type: RECEIVE_EXPERT,
  ...payload,
});

const fpData = {
  files: {
    ILF: {
      ret: 5,
      det: 7,
      description: '',
    },
    EIF: {
      ret: 2,
      det: 1,
      description: '',
    },
    IE: {
      ret: 4,
      det: 5,
      description: '',
    },
    IQ: {
      ret: 11,
      det: 1,
      description: '',
    },
    IO: {
      ret: 2,
      det: 13,
      description: '',
    },
  },
  language: {
    value: 0,
  },
  factors: {
    'Data Connections': {
      value: 3,
    },
    'Distributed data processing': {
      value: 5,
    },
    'Performance requirements': {
      value: 0,
    },
    'Hardware requirements': {
      value: 2,
    },
    'How often transactions are performed': {
      value: 1,
    },
    'What percentage of information is entered online': {
      value: 3,
    },
    'Efficiency for the user': {
      value: 3,
    },
    'How many ILFs are updated online': {
      value: 5,
    },
    'Complex logical or mathematical processing': {
      value: 2,
    },
    'Multi users application': {
      value: 1,
    },
    'The complexity of the installation': {
      value: 3,
    },
    'Efficient or automated start, backup, restore': {
      value: 5,
    },
  },
};

const cocomoData = {
  W1: {
    value: 6,
  },
  W2: {
    value: 3,
  },
  W3: {
    value: 3,
  },
  W4: {
    value: 2,
  },
  W5: {
    value: 4,
  },
  PERS: {
    value: 3,
  },
  RCPX: {
    value: 2,
  },
  RUSE: {
    value: 5,
  },
  PDIF: {
    value: 2,
  },
  PREX: {
    value: 3,
  },
  FCIL: {
    value: 6,
  },
  SCED: {
    value: 1,
  },
};

const expertData = {
  staff: {
    Analytics: {
      time: 2,
      count: 1,
      salary: 1500,
    },
    Design: {
      time: 2,
      count: 2,
      salary: 1500,
    },
    Programming: {
      time: 2,
      count: 4,
      salary: 2500,
    },
    Testing: {
      time: 2,
      count: 2,
      salary: 1500,
    },
    Management: {
      time: 1,
      count: 5,
      salary: 2000,
    },
    Support: {
      time: 2,
      count: 1,
      salary: 1500,
    },
    Commissioning: {
      time: 1,
      count: 1,
      salary: 1500,
    },
  },
  expences: {
    VAT: { value: 10 },
    Income: { value: 500000 },
    'Travel expenses': { value: 5 },
    'Overhead expenses': { value: 7 },
    'Deductions to insurance funds': { value: 2 },
  },
};

const getData = (dispatch, requestCallback, receiveCallback, url, data, key) => {
  dispatch(requestCallback(key));
  return setTimeout(() => dispatch(receiveCallback({ key, data })), 3000);
  //   return axios
  //     .get(url)
  //     .then(response => response.json())
  //     .then(data => dispatch(receiveCallback({ [key]: data })));
};

export function getFP(id) {
  return dispatch => {
    getData(dispatch, requestFP, receiveFP, `/project/fp/${id}`, fpData, 'fp');
  };
}

export function getCocomo(id) {
  return dispatch => {
    getData(dispatch, requestCocomo, receiveCocomo, `/project/cocomo/${id}`, cocomoData, 'cocomo');
  };
}

export function getExpert(id) {
  return dispatch => {
    getData(dispatch, requestExpert, receiveExpert, `/project/expert/${id}`, expertData, 'expert');
  };
}
