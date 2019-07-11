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
  } from '../actions/types'

const initialState = {
  dragons: [],
  dragon: {}
}

export default function dragonReducer(state = initialState, action) {
  switch (action.type) {
    case CREATING_DRAGON:
      return {
        ...state,
        creatingDragon: action.creatingDragon
      };
    case CREATED_DRAGON:
      return {
        ...state,
        createdDragon: action.createdDragon,
        creatingDragon: false
      };
    case SAVING_DRAGON:
      return {
        ...state,
        savingDragon: action.savingDragon
      };
    case SAVED_DRAGON:
      return {
        ...state,
        savedDragon: action.savedDragon,
        savingDragon: false
      };
    case DELETING_DRAGON:
      return {
        ...state,
        deletingDragon: action.deletingDragon
      };
    case DELETED_DRAGON:
      return {
        ...state,
        deletedDragon: action.deletedDragon,
        deletingDragon: false
      };
    case FETCHING_DRAGON:
      return {
        ...state,
        fetchingDragon: action.fetchingDragon
      };
    case FETCH_DRAGON:
      return {
        ...state,
        dragon: action.dragon,
        fetchingDragon: false
      };
    case FETCH_DRAGON_LIST:
      return {
        ...state,
        dragons: action.dragons,
        createdDragon: false,
        savedDragon: false
      };
    default:
      return state;
  }
}
