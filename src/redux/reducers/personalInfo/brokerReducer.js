import { BROKER } from "../../actions/types";

const initialState = {
  brokerInfo: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BROKER:
      return {
        ...state,
        brokerInfo: action.payload,
      };

    default:
      return state;
  }
};
