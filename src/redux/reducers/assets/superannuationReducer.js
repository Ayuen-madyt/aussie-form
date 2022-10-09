import { SUPERANNUATION } from "../../actions/types";

const initialState = {
  superannuation: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUPERANNUATION:
      return {
        ...state,
        superannuation: action.payload,
      };

    default:
      return state;
  }
};
