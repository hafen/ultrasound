import React from 'react';
import SelectButton from './SelectButton';

const SelectN = ({ selected, onNumChange }) => {
  const vals = [1, 2, 3];
  return (
  <div id="select-n">
    Number of ultrasound measurements:&nbsp;
    {
      vals.map((d, i) =>
        <SelectButton
          key = {`selectButton${i}`}
          val = {d}
          selected = {selected === d}
          clickHandler = {onNumChange}
        />
      )
    }
  </div>
  );
};

SelectN.propTypes = {
  selected: React.PropTypes.number,
  onNumChange: React.PropTypes.func
};

export default SelectN;

