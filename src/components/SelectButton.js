import React from 'react';
import { FlatButton } from 'material-ui';

const style = {
  // border: '1px solid #aaa',
  minWidth: 40,
  color: 'rgb(0, 188, 212)'
};

const SelectButton = ({ selected, val, clickHandler }) => {
  const labelStyle = { color: 'rgb(0, 188, 212)' };
  const backgroundColor = selected ? 'rgb(0, 188, 212)' : 'white';
  const hoverColor = selected ? 'rgb(0, 188, 212)' : '#eee';
  labelStyle.color = selected ? 'white' : 'rgb(0, 188, 212)';
  return (
  <FlatButton
    primary
    style = {style}
    labelStyle = {labelStyle}
    backgroundColor = {backgroundColor}
    hoverColor = {hoverColor}
    label = {val}
    onClick = {() => { clickHandler(val); }}
  />);
};

SelectButton.propTypes = {
  selected: React.PropTypes.bool,
  val: React.PropTypes.number,
  clickHandler: React.PropTypes.func
};

export default SelectButton;
