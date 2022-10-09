import { RESIDENTIAL_ADDRESS } from "../types";

export const residentialAddressAction = (value) => {
  return {
    type: RESIDENTIAL_ADDRESS,
    payload: value,
  };
};
