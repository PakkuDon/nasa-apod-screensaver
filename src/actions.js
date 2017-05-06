import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_START,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAIL,
  CHANGE_IMAGE,
  TOGGLE_EXPLANATIONS
} from './constants';

export const fetchImages = () => ({
  type: FETCH_IMAGES_REQUEST
})

export const fetchImagesStart = () => ({
  type: FETCH_IMAGES_START
})

export const fetchImagesSuccess = images => ({
  type: FETCH_IMAGES_SUCCESS,
  images
})

export const fetchImagesFail = error => ({
  type: FETCH_IMAGES_FAIL,
  error
})

export const changeImage = () => ({
  type: CHANGE_IMAGE
})

export const toggleExplanations = () => ({
  type: TOGGLE_EXPLANATIONS
})
