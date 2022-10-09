import { CREDIT_CARDS } from "../types";

export const creditCardsAction = (value) => {
  return {
    type: CREDIT_CARDS,
    payload: value,
  };
};
