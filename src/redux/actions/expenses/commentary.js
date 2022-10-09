import { COMMENTARY } from "../types";

export const commentaryAction = (value) => {
  return {
    type: COMMENTARY,
    payload: value,
  };
};
