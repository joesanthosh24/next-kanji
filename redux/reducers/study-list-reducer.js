import {
  ADD_TO_LIST_REQUEST,
  ADD_TO_LIST_SUCCESS,
  ADD_TO_LIST_FAILURE,
} from "../action-types/study-list-action-types";

const studyListReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case ADD_TO_LIST_REQUEST:
      return { ...state, loading: true };
    case ADD_TO_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...state.list, action.payload],
      };
    case ADD_TO_LIST_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default studyListReducer;
