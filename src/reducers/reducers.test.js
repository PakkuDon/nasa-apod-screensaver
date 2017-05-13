import { expect } from 'chai';
import reducer, { initialState } from './index';
import * as Actions from '../actions';

describe('Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal(initialState);
  });

  describe('fetching images', () => {
    it('on request it should set loading flag', () => {
      const action = Actions.fetchImagesStart();
      expect(reducer({}, action).loading).to.be.true;
    });

    it('on success it should unset loading and set images', () => {
      const images = [
        'url1.png',
        'url2.png'
      ];
      const action = Actions.fetchImagesSuccess(images);
      expect(reducer({}, action)).to.deep.equal({
        images,
        loading: false
      });
    });

    it('on fail it should unset loading and set error', () => {
      const error = 'Error message';
      const action = Actions.fetchImagesFail(error);
      expect(reducer({}, action)).to.deep.equal({
        error,
        loading: false
      });
    });
  });

  describe('image changes', () => {
    const action = Actions.changeImage();

    it('should move to the next image', () => {
      const state = {
        index: 0,
        images: [
          'url1.png', 'url2.png'
        ]
      };
      expect(reducer(state, action).index).to.equal(1);
    });

    it('should loop back to the first image at end', () => {
      const state = {
        index: 1,
        images: [
          'url1.png', 'url2.png'
        ]
      };
      expect(reducer(state, action).index).to.equal(0);
    });
  });

  describe('toggle explanations', () => {
    it('if showExplanations true should become false', () => {
      const state = {
        showExplanations: true
      };
      const action = Actions.toggleExplanations();
      expect(reducer(state, action).showExplanations).to.be.false;
    });

    it('if showExplanations false should become true', () => {
      const state = {
        showExplanations: false
      };
      const action = Actions.toggleExplanations();
      expect(reducer(state, action).showExplanations).to.be.true;
    });
  });
});
