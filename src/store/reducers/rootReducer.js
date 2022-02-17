import { combineReducers } from 'redux';
import loadingReducer from './loading.reducer';
import notifyReducer from './notify.reducer';
import authReducer from './auth.reducer';

const rootReducer = combineReducers({
    loadingReducer,
    notifyReducer,
    authReducer
});

export default rootReducer;
