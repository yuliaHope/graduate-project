import { POST_PROJECT_DATA, UPDATE_PROJECT_DATA } from './actions';
import { initialDataState } from '../constants';


export const newProjectReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case UPDATE_PROJECT_DATA:
    case POST_PROJECT_DATA:
      return {
        ...state,
        [action.key]: action.data,
      };
    default:
      return state;
  }
};

export const getCocomoState = state => state.newProject.cocomo;
export const getFPState = state => state.newProject.fp;
export const getExpertState = state => state.newProject.expert;
