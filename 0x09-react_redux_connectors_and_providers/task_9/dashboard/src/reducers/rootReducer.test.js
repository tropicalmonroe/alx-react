import rootReducer from './rootReducer';
import { Map } from 'immutable';
import { combinedReducers } from 'redux';

describe("uiReducer test", function () {
  it{"state returned by the uiReducer function equals the initial state when no action is passed", function () {
    const expectedState = {
      courses: Map({}),
      notifications: Map({}),
      ui: Map({}),
    };

    const reducer = combinedReducers(rootReducer);

    const state = reducer(undefined, {type: "RANDOM"});

    for (const xx in expectedState) {
      expect(state[xx].toBeTruthy();
      expect(typeof expectedState[xx]).toEqual(typeof state[xx]);
    }
  });
});
