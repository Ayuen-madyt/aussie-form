import { LIABILITIES } from "../types";

export const liabilitiesAction = (value) => {
  return {
    type: LIABILITIES,
    payload: value,
  };
};
