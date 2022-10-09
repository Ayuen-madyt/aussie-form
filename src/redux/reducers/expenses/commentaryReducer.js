import { COMMENTARY } from "../../actions/types";

const initialState = {
  commentary: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COMMENTARY:
      return {
        ...state,
        commentary: action.payload,
      };

    default:
      return state;
  }
};
