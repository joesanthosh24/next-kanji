import { combineReducers } from "redux";

import studyListReducer from "./reducers/study-list-reducer";

const rootReducer = combineReducers({
  studyList: studyListReducer,
});

export default rootReducer;
