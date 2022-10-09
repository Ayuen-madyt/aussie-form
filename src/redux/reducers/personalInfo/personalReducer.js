import { PERSONAL } from "../../actions/types";

const initialState = {
  personalInfo: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PERSONAL:
      return {
        ...state,
        personalInfo: action.payload,
      };

    default:
      return state;
  }
};
