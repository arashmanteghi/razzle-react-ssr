import * as constants from "./constants";

const initialState = {
  weather: {
    isLoading: false,
    data: null
  },
  weather2: {
    isLoading: false,
    data: null
  }
};

export default function aboutReducer(state = initialState, action) {
  switch (action.type) {

    // case constants.WEATHER_REQUEST:
    //   return {
    //     ...state,
    //     weather: {
    //       isLoading: true,
    //     }
    //   };

    case constants.WEATHER_SUCCESS:
      return {
        ...state,
        weather: {
          isLoading: false,
          data: action.response
        }
      };

    case constants.WEATHER_SUCCESS2:
      return {
        ...state,
        weather2: {
          isLoading: false,
          data: action.response
        }
      };

    default:
      return state;
  }
}
