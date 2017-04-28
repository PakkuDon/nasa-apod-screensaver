import * as Actions from './constants';

const initialState = {
  images: [],
  index: 0,
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_IMAGES_START:
      return {
        ...state,
        loading: true
      };
    case Actions.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.images,
        loading: false
      };
    case Actions.FETCH_IMAGES_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case Actions.CHANGE_IMAGE:
      return {
        ...state,
        index: (state.index + 1) % state.images.length
      };
    default:
      return state;
  }
}
