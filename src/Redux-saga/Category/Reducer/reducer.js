import { GET_CATEGORY_ERROR, GET_CATEGORY_PROGRESS, GET_CATEGORY_SUCCESS } from "../action/action";


const initialState = {
    Category: [],
    getCategoryProgress: false,
    getCategoryError: null,
    CategoryIsLoaded: false,
}

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CATEGORY_PROGRESS:
        return {
          ...state,
          getCategoryProgress: true,
          getCategoryError: null,
          CategoryIsLoaded: false,
        };
      case GET_CATEGORY_SUCCESS:
        return {
          ...state,
          getCategoryProgress: false,
          getCategoryError: null,
          CategoryIsLoaded: true,
          Category: action.data,
        };

      case GET_CATEGORY_ERROR:
        return {
          ...state,
          getCategoryProgress: false,
          getCategoryError: action.data,
          CategoryIsLoaded: false,
        };

    default:
        return state;
    }
};

export default CategoryReducer;