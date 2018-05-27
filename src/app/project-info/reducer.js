import { REQUEST_FP, RECEIVE_FP, REQUEST_COCOMO, RECEIVE_COCOMO, REQUEST_EXPERT, RECEIVE_EXPERT } from './actions';
import { calculateFPLoc, calculateCocomo, calculateExpences } from '../utils/calculation.util';
import { initialDataState } from '../constants';
import { POST_PROJECT_DATA, UPDATE_PROJECT_DATA } from '../new-project/actions';

const initialState = {};
Object.keys(initialDataState).forEach(key => {
  initialState[key] = { loaded: true, data: initialDataState[key] };
});

export const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_FP:
    case REQUEST_COCOMO:
    case REQUEST_EXPERT:
      return {
        ...state,
        [action.key]: { ...state[action.key], loaded: false },
      };
    case UPDATE_PROJECT_DATA:
    case POST_PROJECT_DATA:
    case RECEIVE_COCOMO:
    case RECEIVE_EXPERT:
    case RECEIVE_FP: {
      return {
        ...state,
        [action.key]: { ...state[action.key], data: action.data, loaded: true },
      };
    }
    default:
      return state;
  }
};

const getDataState = (obj) => {
  const { loaded, data } = obj;
  return {
    loaded,
    data: Object.keys(data).map(key => ({
      name: key,
      ...data[key],
    })),
  };
};

export const getFPFilesState = state => {
  const { loaded, data } = state.info.fp;
  return getDataState({ loaded, data: data.files });
};

export const getFPVAFState = state => {
  const { loaded, data } = state.info.fp;
  return getDataState({ loaded, data: data.factors });
};

export const getCocomoState = state => {
  const { loaded, data } = state.info.cocomo;
  return getDataState({ loaded, data });
};

export const getExpertStaffState = state => {
  const { loaded, data } = state.info.expert;
  return getDataState({ loaded, data: data.staff });
};

export const getExpertExpencesState = state => {
  const { loaded, data } = state.info.expert;
  return getDataState({ loaded, data: data.expences });
};

export const getResult = state => {
  const {
    data: { files, language, factors },
  } = state.info.fp;
  const { data: { staff, expences } } = state.info.expert;
  const loc = calculateFPLoc(files, language, factors);
  const calculatedExpences = calculateExpences(staff, expences);
  return [
    {
      label: 'Language',
      value: language.value,
    },
    {
      label: 'COCOMO',
      value: calculateCocomo(loc, state.info.cocomo),
      measurementValue: 'man/month',
    },
    {
      label: 'Expences',
      value: calculatedExpences,
      measurementValue: '$',
      color: 'red',
    },
    {
      label: 'Net Profit',
      value: expences.Income.value - calculatedExpences,
      measurementValue: '$',
      color: 'green',
    },
  ];
};
