import { Map as imMap, fromJS } from 'immutable';

const optimumTimes = fromJS([
  [7],
  [4, 11],
  [2, 10, 18]
]);
const optimumSDs = fromJS([4, 3, 2]);
const initialNum = 2;

const initialState = imMap({
  numMeasure: initialNum,
  optMeasureTimes: optimumTimes.get(initialNum - 1),
  measureTimes: optimumTimes.get(initialNum - 1),
  optSD: optimumSDs.get(initialNum - 1)
});

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NUM_MEASURE':
      return state.withMutations((d) => {
        d.set('numMeasure', action.n);
        d.set('optMeasureTimes', optimumTimes.get(action.n - 1));
        d.set('measureTimes', optimumTimes.get(action.n - 1));
        d.set('optSD', optimumSDs.get(action.n - 1));
      });
    case 'SET_MEASURE_TIME':
      return state.setIn(['measureTimes', action.time.index], action.time.val);
    default:
      return state;
  }
};

export default app;
