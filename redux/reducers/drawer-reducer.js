import {
  SET_DRAWER_OPEN,
  SET_DRAWER_CLOSE,
} from "../action-types/drawer-action-types";

const DrawerReducer = (state = { open: false }, action) => {
  switch (action.type) {
    case SET_DRAWER_OPEN:
      return { open: true };
    case SET_DRAWER_CLOSE:
      return { open: false };
    default:
      return state;
  }
};

export default DrawerReducer;
