import { CREDIT_CARDS } from "../../actions/types";

const initialState = {
  creditCards: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREDIT_CARDS:
      return {
        ...state,
        creditCards: action.payload,
      };

    default:
      return state;
  }
};
