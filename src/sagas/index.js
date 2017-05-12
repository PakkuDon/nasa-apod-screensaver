import { takeEvery } from 'redux-saga/effects';
import { FETCH_IMAGES_REQUEST } from '../constants';
import fetchImagesAsync from './fetchImages';

export function* watchFetchImagesAsync() {
  yield takeEvery(FETCH_IMAGES_REQUEST, fetchImagesAsync);
}

export default function* rootSaga() {
  yield [
    watchFetchImagesAsync()
  ];
}
