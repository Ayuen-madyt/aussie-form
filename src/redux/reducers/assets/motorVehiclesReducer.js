import { MOTOR_VEHICLES } from "../../actions/types";

const initialState = {
  vehicles: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOTOR_VEHICLES:
      return {
        ...state,
        vehicles: action.payload,
      };

    default:
      return state;
  }
};
