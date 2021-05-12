import {
  SET_DRAWER_OPEN,
  SET_DRAWER_CLOSE,
} from "../action-types/drawer-action-types";

export const openDrawer = () => ({
  type: SET_DRAWER_OPEN,
});

export const closeDrawer = () => ({
  type: SET_DRAWER_CLOSE,
});
