import { OTHER_LIABILITIES } from "../../actions/types";

const initialState = {
  otherLiabilities: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OTHER_LIABILITIES:
      return {
        ...state,
        otherLiabilities: action.payload,
      };

    default:
      return state;
  }
};
