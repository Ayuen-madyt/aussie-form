import { HOUSEHOLD_ITEMS } from "../../actions/types";

const initialState = {
  housholdItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HOUSEHOLD_ITEMS:
      return {
        ...state,
        housholdItems: action.payload,
      };

    default:
      return state;
  }
};
