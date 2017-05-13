import { expect } from 'chai';
import { call, put } from 'redux-saga/effects';
import {
  fetchImagesStart,
  fetchImagesSuccess,
  fetchImagesFail
} from '../actions';
import fetchImagesAsync, { fetchImages } from './fetchImages';

describe('fetchImages', () => {
  describe('success flow', () => {
    const saga = fetchImagesAsync();

    it('dispatches a request action', () => {
      expect(saga.next().value)
        .to.deep.equal(put(fetchImagesStart()));
    });

    it('fetches images from API', () => {
      expect(saga.next().value)
        .to.deep.equal(call(fetchImages));
    });

    it('dispatches success action', () => {
      const images = [];
      expect(saga.next(images).value)
        .to.deep.equal(put(fetchImagesSuccess(images)));
    });

    it('should be done', () => {
      expect(saga.next().done).to.be.true;
    });
  });
});
