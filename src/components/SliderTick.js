import React from 'react';

const SliderTick = ({ top, left, height, isOptimum }) => {
  const style = {
    boxSizing: 'border-box',
    position: 'absolute',
    width: 2,
    border: '1px solid #888',
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    top,
    left: left - 1,
    height: isOptimum ? height + 2 : height,
    borderColor: isOptimum ? '#D62728' : '#888',
    background: isOptimum ? '#D62728' : '#888',
    borderWidth: isOptimum ? 2 : 1
  };

  return <div style={style}></div>;
};

SliderTick.propTypes = {
  top: React.PropTypes.number,
  left: React.PropTypes.number,
  height: React.PropTypes.number,
  isOptimum: React.PropTypes.bool
};

export default SliderTick;
