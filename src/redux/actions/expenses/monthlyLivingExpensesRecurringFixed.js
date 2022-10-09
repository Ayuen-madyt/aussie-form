import { MONTHLY_LIVING_EXPENSES_RECURRING_FIXED } from "../types";

export const monthlyLivingExpensesRecurringFixedAction = (value) => {
  return {
    type: MONTHLY_LIVING_EXPENSES_RECURRING_FIXED,
    payload: value,
  };
};
