import produce from 'immer';
import {
  GET_SCHOOLS_REQUEST,
  GET_SCHOOLS_SUCCESS,
  ADD_SCHOOLS_REQUEST,
  ADD_SCHOOLS_SUCCESS,
  UPDATE_SCHOOLS_REQUEST,
  UPDATE_SCHOOLS_SUCCESS,
  SET_CURRENT_REQUEST,
  SET_CURRENT_SUCCESS,
  SEARCH_SCHOOLS_REQUEST,
  SEARCH_SCHOOLS_SUCCESS,
  DELETE_SCHOOLS_REQUEST,
  DELETE_SCHOOLS_SUCCESS,
} from './types';

const INITIAL_STATE = {
  schools: [],
  current: null,
  loading: false,
};

export default function log(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case GET_SCHOOLS_REQUEST: {
        draft.loading = true;
        break;
      }
      case GET_SCHOOLS_SUCCESS: {
        draft.schools = action.payload.data;
        draft.loading = false;
        break;
      }
      case ADD_SCHOOLS_REQUEST: {
        draft.loading = true;
        break;
      }
      case ADD_SCHOOLS_SUCCESS: {
        draft.loading = false;
        break;
      }
      case UPDATE_SCHOOLS_REQUEST: {
        draft.loading = true;
        break;
      }
      case UPDATE_SCHOOLS_SUCCESS: {
        draft.loading = false;
        draft.current = false;
        break;
      }
      case SET_CURRENT_REQUEST: {
        draft.loading = false;
        break;
      }
      case SET_CURRENT_SUCCESS: {
        draft.loading = false;
        draft.current = action.payload.data;
        break;
      }
      case SEARCH_SCHOOLS_REQUEST: {
        draft.loading = true;
        break;
      }
      case SEARCH_SCHOOLS_SUCCESS: {
        draft.loading = false;
        draft.schools = action.payload.data;
        break;
      }
      case DELETE_SCHOOLS_REQUEST: {
        draft.loading = true;
        break;
      }
      case DELETE_SCHOOLS_SUCCESS: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
