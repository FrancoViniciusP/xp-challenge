import { combineReducers } from 'redux';
import clientInfos from './clientInfos';
import assetsInfos from './assetsInfos';

const rootReducer = combineReducers({ clientInfos, assetsInfos });

export default rootReducer;
