import { MONTHLY_LIVING_EXPENSES_BASIC } from "../types";

export const monthlyLivingExpensesBAsicAction = (value) => {
  return {
    type: MONTHLY_LIVING_EXPENSES_BASIC,
    payload: value,
  };
};
