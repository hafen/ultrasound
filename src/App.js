import React from 'react';
import SelectNContainer from './containers/SelectNContainer';
import SliderContainer from './containers/SliderContainer';
import DistPlotContainer from './containers/DistPlotContainer';

const App = () => (
  <div>
    <SelectNContainer />
    <div>Measurement time (weeks):</div>
    <SliderContainer />
    <DistPlotContainer />
  </div>
);

export default App;
