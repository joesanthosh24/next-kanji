import { combineReducers } from "redux";

import studyListReducer from "./reducers/study-list-reducer";
import DrawerReducer from "./reducers/drawer-reducer";

const rootReducer = combineReducers({
  studyList: studyListReducer,
  drawer: DrawerReducer,
});

export default rootReducer;
