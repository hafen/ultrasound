import React from 'react';
import SliderHandle from './SliderHandle';
import SliderTick from './SliderTick';
import SliderTickLabel from './SliderTickLabel';

const style = {
  position: 'relative',
  margin: 0,
  padding: 0,
  marginTop: 5,
  float: 'left'
};

const innerBoxStyle = {
  // opacity: 0.9,
  position: 'absolute',
  left: 0,
  top: 0,
  background: '#eee'
};

const Slider = ({ pos, handleWidth, handleHeight, breaks, width, onTimeChange }) => {
  const segmentWidth = Math.floor((width - handleWidth) /
    (breaks - 1));
  const newWidth = segmentWidth * (breaks - 1) +
    handleWidth;
  // const leftOver = width - newWidth;

  const tickHeight = 5;
  const optTimes = pos;

  style.width = newWidth;
  style.height = handleHeight + tickHeight + 20;

  innerBoxStyle.width = newWidth;
  innerBoxStyle.height = handleHeight;

  const ticks = [];
  const isOptimum = [];
  for (let i = 0; i < breaks; i++) {
    ticks.push(handleWidth / 2 + i * segmentWidth);
    isOptimum.push(optTimes.indexOf(i + 1) > -1);
  }

  const tickLabels = [];
  const tickLabelLocs = [];
  for (let i = 0; i < breaks; i = i + 3) {
    tickLabels.push(i + 1);
    tickLabelLocs.push(i * segmentWidth);
  }

  return (
  <div>
  <div style={style}>
    {
      ticks.map((d, i) =>
        <SliderTick
          top = {handleHeight}
          left = {d}
          isOptimum = {isOptimum[i]}
          height = {tickHeight}
          key = {`tick${i}`}
        />
      )
    }
    {
      tickLabelLocs.map((d, i) =>
        <SliderTickLabel
          top = {handleHeight + tickHeight + 3}
          left = {d}
          width = {handleWidth}
          val = {tickLabels[i]}
          key = {`tickLabel${i}`}
        />
      )
    }
    <div style={innerBoxStyle}></div>
    {
      optTimes.map((d, i) =>
        <SliderHandle
          key = {`handle-${i}-${optTimes.length}`}
          width = {handleWidth}
          boundWidth = {newWidth - handleWidth}
          height = {handleHeight}
          start = {(d - 1) * segmentWidth}
          segmentWidth = {segmentWidth}
          breaks = {breaks}
          onTimeChange = {onTimeChange}
          index = {i}
        />
      )
    }
  </div>
  </div>);
};

Slider.propTypes = {
  pos: React.PropTypes.array,
  handleWidth: React.PropTypes.number,
  handleHeight: React.PropTypes.number,
  breaks: React.PropTypes.number,
  width: React.PropTypes.number,
  onTimeChange: React.PropTypes.func
};

export default Slider;
