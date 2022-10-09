import { EMPLOYMENT } from "../types";

export const employmentAction = (value) => {
  return {
    type: EMPLOYMENT,
    payload: value,
  };
};
