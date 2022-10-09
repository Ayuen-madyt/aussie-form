import { OTHER_ASSETS } from "../../actions/types";

const initialState = {
  otherAssets: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OTHER_ASSETS:
      return {
        ...state,
        otherAssets: action.payload,
      };

    default:
      return state;
  }
};
