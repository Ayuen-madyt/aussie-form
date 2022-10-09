import { RESIDENTIAL_ADDRESS } from "../../actions/types";

const initialState = {
  residentialAddress: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESIDENTIAL_ADDRESS:
      return {
        ...state,
        residentialAddress: action.payload,
      };

    default:
      return state;
  }
};
