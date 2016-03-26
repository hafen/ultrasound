import React from 'react';

const SliderTickLabel = ({ val, top, left, width }) => {
  const style = {
    position: 'absolute',
    textAlign: 'center',
    height: 20,
    color: '#555',
    top,
    left,
    width
  };

  return <div style={style}>{val}</div>;
};

SliderTickLabel.propTypes = {
  val: React.PropTypes.number,
  top: React.PropTypes.number,
  left: React.PropTypes.number,
  width: React.PropTypes.number
};

export default SliderTickLabel;
