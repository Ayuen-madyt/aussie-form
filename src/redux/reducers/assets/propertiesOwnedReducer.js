import { PROPERTIES_OWNED } from "../../actions/types";

const initialState = {
  propertiesOwned: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROPERTIES_OWNED:
      return {
        ...state,
        propertiesOwned: action.payload,
      };

    default:
      return state;
  }
};
