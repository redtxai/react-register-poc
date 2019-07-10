import { CREATE_DRAGON, SAVE_DRAGON, FETCH_DRAGON_LIST } from './types'
import axios from 'axios'

const apiUrl = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon'

export const createDragonSuccess =  (data) => {
  return {
    type: CREATE_DRAGON,
    payload: {
      body: data
    }
  }
};

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

export const saveDragonSuccess = (dragon) => {
  return {
    type: SAVE_DRAGON,
    dragon
  }
};

export const saveDragon = (dragon) => {
  return (dispatch) => {
    return axios.put(`${apiUrl}/${dragon.id}`, dragon)
      .then(response => {
        dispatch(fetchAllDragons())
      })
      .catch(error => {
        throw(error);
      });
  };
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
