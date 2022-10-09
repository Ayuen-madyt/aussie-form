import { SUPERANNUATION } from "../types";

export const superannuationAction = (value) => {
  return {
    type: SUPERANNUATION,
    payload: value,
  };
};
