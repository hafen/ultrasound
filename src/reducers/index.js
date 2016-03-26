const optimumTimes = [
  [7],
  [4, 11],
  [2, 10, 18]
];

const optimumSDs = [4, 3, 2];

const initialNum = 2;

const initialState = {
  numMeasure: initialNum,
  optMeasureTimes: optimumTimes[initialNum - 1],
  measureTimes: optimumTimes[initialNum - 1],
  optSD: optimumSDs[initialNum - 1]
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NUM_MEASURE':
      return Object.assign({}, state, {
        numMeasure: action.n,
        optMeasureTimes: optimumTimes[action.n - 1],
        measureTimes: optimumTimes[action.n - 1],
        optSD: optimumSDs[action.n - 1]
      });
    case 'SET_MEASURE_TIME':
      return Object.assign({}, state, {
        measureTimes: state.measureTimes.map((val, index) => {
          if (index === action.time.index) {
            return action.time.val;
          }
          return val;
        })
      });
    default:
      return state;
  }
};

export default app;
