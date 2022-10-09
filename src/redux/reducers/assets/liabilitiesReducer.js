import { LIABILITIES } from "../../actions/types";

const initialState = {
  liabilities: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIABILITIES:
      return {
        ...state,
        liabilities: action.payload,
      };

    default:
      return state;
  }
};
