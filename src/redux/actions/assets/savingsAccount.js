import { SAVINGS_ACCOUNT } from "../types";

export const savingsAccountAction = (value) => {
  return {
    type: SAVINGS_ACCOUNT,
    payload: value,
  };
};
