import { PROPERTIES_OWNED } from "../types";

export const propertiesOwnedAction = (value) => {
  return {
    type: PROPERTIES_OWNED,
    payload: value,
  };
};
