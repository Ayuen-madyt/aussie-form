import { MONTHLY_LIVING_EXPENSES_RECURRING_FIXED } from "../../actions/types";

const initialState = {
  expensesRecurringFixed: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MONTHLY_LIVING_EXPENSES_RECURRING_FIXED:
      return {
        ...state,
        expensesRecurringFixed: action.payload,
      };

    default:
      return state;
  }
};
