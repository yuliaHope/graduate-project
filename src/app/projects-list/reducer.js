import { REQUEST_PROJECTS, RECEIVE_PROJECTS } from './actions';

const initialState = {
  projects: [],
  loaded: false,
  error: false,
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PROJECTS:
      return {
        ...state,
        loaded: false,
      };
    case RECEIVE_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loaded: true,
      };
    default:
      return state;
  }
};

export const getProjectsState = state => state.projects;
