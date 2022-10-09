import { MOTOR_VEHICLES } from "../types";

export const motorVehiclesAction = (value) => {
  return {
    type: MOTOR_VEHICLES,
    payload: value,
  };
};
