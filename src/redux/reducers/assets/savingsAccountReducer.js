import { SAVINGS_ACCOUNT } from "../../actions/types";

const initialState = {
  savingsAccountInfo: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVINGS_ACCOUNT:
      return {
        ...state,
        savingsAccountInfo: action.payload,
      };

    default:
      return state;
  }
};
