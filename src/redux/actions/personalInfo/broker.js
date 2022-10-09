import { BROKER } from "../types";

export const brokerAction = (value) => {
  return {
    type: BROKER,
    payload: value,
  };
};
