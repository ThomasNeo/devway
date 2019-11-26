import { all } from 'redux-saga/effects';

import school from './school/sagas';
import tech from './tech/sagas';

export default function* rootSaga() {
  return yield all([school, tech]);
}
