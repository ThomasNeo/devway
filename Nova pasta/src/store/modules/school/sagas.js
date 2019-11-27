import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import {
  GET_SCHOOLS_REQUEST,
  ADD_SCHOOLS_REQUEST,
  UPDATE_SCHOOLS_REQUEST,
  DELETE_SCHOOLS_REQUEST,
  SET_CURRENT_REQUEST,
  SEARCH_SCHOOLS_REQUEST,
} from './types';
import {
  getSchoolsRequest,
  getSchoolsSuccess,
  addSchoolSuccess,
  updateSchoolSuccess,
  setCurrentSuccess,
  setSearchSchoolSuccess,
  deleteSchoolSuccess,
} from './actions';

import api from '../../../services/api';

export function* getSchools() {
  const response = yield call(api.get, 'schools');

  yield put(getSchoolsSuccess(response.data));
}

export function* addSchool({ payload }) {
  const { name, location, cnpj, email, password, phone } = payload;

  yield call(api.post, 'schools', {
    name,
    location,
    cnpj,
    email,
    password,
    phone,
  });

  yield put(addSchoolSuccess());
  yield put(getSchoolsRequest());
}

export function* updateSchool({ payload }) {
  const { message, attention, tech } = payload;

  const current = yield select(state => state.school.current);

  yield call(api.put, `schools/${current.id}`, {
    message,
    attention,
    tech,
    date: new Date(),
  });

  yield put(updateSchoolSuccess());
  yield put(getSchoolsRequest());
}

export function* deleteSchool({ payload }) {
  yield call(api.delete, `schools/${payload.id}`);

  yield put(deleteSchoolSuccess());
  yield put(getSchoolsRequest());
}

export function* searchSchools({ payload }) {
  const response = yield call(api.get, `schools?q=${payload.text}`);

  yield put(setSearchSchoolSuccess(response.data));
}

// Gets log selected by user and set current attribute to update
export function* currentSchool({ payload }) {
  const schools = yield select(state => state.school.schools);

  const current = yield schools.find(school => school.id === payload.id);

  yield put(setCurrentSuccess(current));
}

export default all([
  takeLatest(GET_SCHOOLS_REQUEST, getSchools),
  takeLatest(ADD_SCHOOLS_REQUEST, addSchool),
  takeLatest(UPDATE_SCHOOLS_REQUEST, updateSchool),
  takeLatest(DELETE_SCHOOLS_REQUEST, deleteSchool),
  takeLatest(SET_CURRENT_REQUEST, currentSchool),
  takeLatest(SEARCH_SCHOOLS_REQUEST, searchSchools),
]);
