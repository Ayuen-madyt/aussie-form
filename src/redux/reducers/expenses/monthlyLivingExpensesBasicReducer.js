import { MONTHLY_LIVING_EXPENSES_BASIC } from "../../actions/types";

const initialState = {
  expensesBasic: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MONTHLY_LIVING_EXPENSES_BASIC:
      return {
        ...state,
        expensesBasic: action.payload,
      };

    default:
      return state;
  }
};
