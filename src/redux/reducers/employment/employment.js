import { EMPLOYMENT } from "../../actions/types";

const initialState = {
  employmentInfo: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYMENT:
      return {
        ...state,
        employmentInfo: action.payload,
      };

    default:
      return state;
  }
};
