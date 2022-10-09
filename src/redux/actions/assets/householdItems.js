import { HOUSEHOLD_ITEMS } from "../types";

export const householdItemsAction = (value) => {
  return {
    type: HOUSEHOLD_ITEMS,
    payload: value,
  };
};
