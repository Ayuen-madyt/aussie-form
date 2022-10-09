import { OTHER_LIABILITIES } from "../types";

export const otherLiabilitiesAction = (value) => {
  return {
    type: OTHER_LIABILITIES,
    payload: value,
  };
};
