import { CREATE_DRAGON, FETCH_DRAGON_LIST } from './types'
import axios from 'axios'

const apiUrl = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon'

export const createDragon = ({ title, body }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}`, {title, body})
      .then(response => {
        dispatch(createDragonSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createDragonSuccess =  (data) => {
  return {
    type: CREATE_DRAGON,
    payload: {
      body: data
    }
  }
};

export const fetchDragonList = (dragons) => {
  return {
    type: FETCH_DRAGON_LIST,
    dragons
  }
}

export const fetchAllDragons = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchDragonList(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
