import { OTHER_ASSETS } from "../types";

export const otherAssetsAction = (value) => {
  return {
    type: OTHER_ASSETS,
    payload: value,
  };
};
