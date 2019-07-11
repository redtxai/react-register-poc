import {
  CREATING_DRAGON,
  CREATED_DRAGON,
  SAVING_DRAGON,
  SAVED_DRAGON,
  DELETING_DRAGON,
  DELETED_DRAGON,
  FETCHING_DRAGON,
  FETCH_DRAGON,
  FETCHING_DRAGON_LIST,
  FETCH_DRAGON_LIST
  } from './types'
import axios from 'axios'

const apiUrl = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon'

export const creatingDragon = () => {
  return {
    type: CREATING_DRAGON,
    creatingDragon
  }
}

export const createdDragon = () => {
  return {
    type: CREATED_DRAGON,
    createdDragon
  }
}

export const createDragon = (dragon) => {
  return (dispatch) => {
    dispatch(creatingDragon())
    return axios.post(`${apiUrl}`, dragon)
      .then(response => {
        dispatch(createdDragon())
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const savingDragon = () => {
  return {
    type: SAVING_DRAGON,
    savingDragon
  }
}

export const savedDragon = () => {
  return {
    type: SAVED_DRAGON,
    savedDragon
  }
}

export const saveDragon = (dragon) => {
  return (dispatch) => {
    dispatch(savingDragon())
    return axios.put(`${apiUrl}/${dragon.id}`, dragon)
      .then(response => {
        dispatch(savedDragon())
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const deletingDragon = () => {
  return {
    type: DELETING_DRAGON,
    deletingDragon
  }
}

export const deletedDragon = () => {
  return {
    type: DELETED_DRAGON,
    deletedDragon
  }
}

export const deleteDragon = (id) => {
  return (dispatch) => {
    dispatch(deletingDragon())
    return axios.delete(`${apiUrl}/${id}`)
      .then(response => {
        dispatch(deletedDragon())
        dispatch(fetchAllDragons())
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchingDragon = () => {
  return {
    type: FETCHING_DRAGON,
    fetchingDragon
  }
}

export const fetchDragon = (dragon) => {
  return {
    type: FETCH_DRAGON,
    dragon
  }
}

export const fetchDragonProfile = (id) => {
  return (dispatch) => {
    dispatch(fetchingDragon())
    return axios.get(`${apiUrl}/${id}`)
      .then(response => {
        dispatch(fetchDragon(response.data))
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
