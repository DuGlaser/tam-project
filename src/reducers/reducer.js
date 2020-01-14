import { REQUEST, SUCCESS, FAIL } from "../actions/action";

export const reducer = (state, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case SUCCESS:
      return {
        ...state,
        // payload...
        isLoading: false
      };

    case FAIL:
      return {
        ...state,
        // error...
        isLoading: false
      };
    default:
  }
};
