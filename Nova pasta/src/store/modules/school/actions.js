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

export function getSchoolsRequest() {
  return {
    type: GET_SCHOOLS_REQUEST,
  };
}

export function getSchoolsSuccess(data) {
  return {
    type: GET_SCHOOLS_SUCCESS,
    payload: { data },
  };
}

export function addSchoolRequest(name, location, cnpj, email, password, phone) {
  return {
    type: ADD_SCHOOLS_REQUEST,
    payload: { name, location, cnpj, email, password, phone },
  };
}

export function addSchoolSuccess() {
  return {
    type: ADD_SCHOOLS_SUCCESS,
    payload: { loading: false },
  };
}

export function updateSchoolRequest(
  name,
  location,
  cnpj,
  email,
  password,
  phone
) {
  return {
    type: UPDATE_SCHOOLS_REQUEST,
    payload: { name, location, cnpj, email, password, phone },
  };
}

export function updateSchoolSuccess() {
  return {
    type: UPDATE_SCHOOLS_SUCCESS,
  };
}

export function setCurrentRequest(id) {
  return {
    type: SET_CURRENT_REQUEST,
    payload: { id },
  };
}

export function setCurrentSuccess(data) {
  return {
    type: SET_CURRENT_SUCCESS,
    payload: { data },
  };
}

export function setSearchSchoolRequest(text) {
  return {
    type: SEARCH_SCHOOLS_REQUEST,
    payload: { text },
  };
}

export function setSearchSchoolSuccess(data) {
  return {
    type: SEARCH_SCHOOLS_SUCCESS,
    payload: { data },
  };
}

export function deleteSchoolRequest(id) {
  return {
    type: DELETE_SCHOOLS_REQUEST,
    payload: { id },
  };
}

export function deleteSchoolSuccess() {
  return {
    type: DELETE_SCHOOLS_SUCCESS,
  };
}
