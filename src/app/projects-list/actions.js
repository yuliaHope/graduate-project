// import axios from 'axios';

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';

export const requestProjects = ({ offset, limit }) => ({
  type: REQUEST_PROJECTS,
  payload: { offset, limit },
});

export const receiveProjects = payload => ({
  type: RECEIVE_PROJECTS,
  payload,
});

export function getProjects(payload) {
  return dispatch => {
    dispatch(requestProjects(payload));
    const data = [
      {
        name: 'List Manager',
        start: '12/05/2013',
        end: '14/09/2013',
        fp: 84,
        cocomo: 9,
        experts: 3,
        teamMembers: 2,
        id: '1',
      },
      {
        name: 'Permissions Manager',
        start: '11/07/2017',
        end: '14/10/2017',
        fp: 192,
        cocomo: 14,
        experts: 3,
        teamMembers: 5,
        id: '2',
      },
    ];
    return setTimeout(() => dispatch(receiveProjects(data)), 3000);
    // return axios.get(`my_url_here`)
    //   .then(response => response.json())
    //   .then(data => dispatch(receiveProjects(data)));
  };
}
