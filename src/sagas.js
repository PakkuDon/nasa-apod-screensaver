import moment from 'moment';
import fetch from 'isomorphic-fetch';
import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_IMAGES_REQUEST } from './constants';
import {
  fetchImagesStart,
  fetchImagesSuccess,
  fetchImagesFail
} from './actions';
import config from './config';

const IMAGE_COUNT = 20;

function fetchImages() {
  const dates = [];
  const date = moment();
  date.subtract(1, 'days');
  for (let i = 0; i < IMAGE_COUNT; i++) {
    dates.push(date.format('YYYY-MM-DD'));
    date.subtract(1, 'days');
  }

  return Promise.all(
    dates
      .map(date => (`${config.API_BASE_URL}?api_key=${config.API_KEY}&date=${date}`))
      .map(url => (
        fetch(url).then(response => response.json())
      ))
  )
  .then(images => {
    return images;
  })
  .catch(errors => {
    throw errors[0];
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
