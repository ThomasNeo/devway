import { combineReducers } from 'redux';

import school from './school/reducer';
import tech from './tech/reducer';

export default combineReducers({
  school,
  tech,
});
