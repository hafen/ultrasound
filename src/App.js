import React from 'react';
import SelectNContainer from './containers/SelectNContainer';
import SliderContainer from './containers/SliderContainer';
import DistPlotContainer from './containers/DistPlotContainer';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const App = () => (
  <div>
    <SelectNContainer />
    <div>Measurement time (weeks):</div>
    <SliderContainer />
    <DistPlotContainer />
  </div>
);

export default App;
