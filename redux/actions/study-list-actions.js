import {
  ADD_TO_LIST_REQUEST,
  ADD_TO_LIST_SUCCESS,
  ADD_TO_LIST_FAILURE,
} from "../action-types/study-list-action-types";

export const addToList = () => ({
  type: ADD_TO_LIST_REQUEST,
});

export const addToListSuccess = (item) => ({
  type: ADD_TO_LIST_SUCCESS,
  payload: item,
});
