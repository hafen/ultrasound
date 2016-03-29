import React from 'react';

const SelectButton = ({ selected, val, clickHandler }) => {
  const style = {
    minWidth: 40,
    border: 10,
    boxSizing: 'border-box',
    display: 'inline-block',
    cursor: 'pointer',
    transform: 'translate3d(0px, 0px, 0px)',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    fontSize: 14,
    borderRadius: 2,
    position: 'relative',
    lineHeight: '36px',
    textAlign: 'center',
    backgroundColor: selected ? 'rgb(0, 188, 212)' : 'white',
    color: selected ? 'white' : 'rgb(0, 188, 212)'
  };

  return (
  <div
    primary
    style = {style}
    onClick = {() => { clickHandler(val); }}
  >{val}</div>
  );
};

SelectButton.propTypes = {
  selected: React.PropTypes.bool,
  val: React.PropTypes.number,
  clickHandler: React.PropTypes.func
};

export default SelectButton;
