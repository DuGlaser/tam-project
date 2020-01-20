import { REQUEST, SUCCESS, FAIL } from "../actions/action";

export const initialState = {
  data: {
    notes: [],
    note: []
  },
  inLoading: true
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      console.log(action);
      return {
        ...state,
        isLoading: true
      };

    case SUCCESS:
      console.log(action);
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };

    case FAIL:
      console.log(action);
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

