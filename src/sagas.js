import fetch from 'isomorphic-fetch';
import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_IMAGES_REQUEST } from './constants';
import {
  fetchImagesStart,
  fetchImagesSuccess,
  fetchImagesFail
} from './actions';
import config from './config';

function fetchImages() {
  return fetch(`${config.API_BASE_URL}?api_key=${config.API_KEY}`)
    .then(response => response.json())
    .then(json => {
      const images = [];
      images.push(json.hdurl || json.url);
      return images;
    })
    .catch(error => {
      throw error;
    });
}

export function* fetchImagesAsync() {
  yield put(fetchImagesStart());
  try {
    const images = yield call(fetchImages);
    yield put(fetchImagesSuccess(images));
  }
  catch (e) {
    yield put(
      fetchImagesFail('An error occurred while trying to reach API. Please try again.')
    );
  }
}

export function* watchFetchImagesAsync() {
  yield takeEvery(FETCH_IMAGES_REQUEST, fetchImagesAsync);
}

export default function* rootSaga() {
  yield [
    watchFetchImagesAsync()
  ];
}
