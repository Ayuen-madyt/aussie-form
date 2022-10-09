import { PERSONAL } from "../types";

export const personalAction = (value) => {
  return {
    type: PERSONAL,
    payload: value,
  };
};
