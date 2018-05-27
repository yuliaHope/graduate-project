// import axios from 'axios';
import { history } from '../store';

export const POST_PROJECT_DATA = 'POST_PROJECT_DATA';
export const UPDATE_PROJECT_DATA = 'UPDATE_PROJECT_DATA';

export const postData = payload => ({
  type: POST_PROJECT_DATA,
  payload,
});

export const updateStore = (payload) => ({
  type: UPDATE_PROJECT_DATA,
  ...payload,
});

export function saveData(payload) {
  return dispatch => {
    dispatch(postData(payload));
    const res = { id: '72615' };
    return setTimeout(() => history.push(`/projects/${res.id}`, 3000));
    // return axios.get(`my_url_here`)
    //   .then(response => response.json())
    //   .then(data => dispatch(receiveProjects(data)));
  };
}
