import React from 'react';
import d3 from 'd3';
import DistNormal from './DistNormal';

const DistPlot = ({ width, height, pos, optPos, optSD }) => {
  const style = {
    width,
    height
  };

  const colors = ['#1F77B4', '#FF7F0E', '#2CA02C'];

  const margin = { top: 5, right: 10, bottom: 30, left: 10 };
  const distWidth = width - margin.left - margin.right;
  const distHeight = height - margin.top - margin.bottom;

  let sds = pos.map((d) => 1 / Math.sqrt(d / 10));
  // sds.push(optSD);
  sds.push(d3.min(sds) / 1.5);
  sds = sds.sort((a, b) => b - a);
  const maxSD = d3.max(sds) * 3;
  const maxDistHeight = 1 / d3.min(sds);

  const spos = pos.sort((a, b) => a - b);
  const labs = [];
  let weekLab = '';
  for (let i = 0; i < spos.length; i++) {
    weekLab = i === 0 ? spos[0] : `${weekLab}, ${spos[i]}`;
    labs.push(`Measured at week${i === 0 ? '' : 's'} ${weekLab}`);
  }
  const soptPos = optPos.sort((a, b) => a - b);
  labs.push(`Optimal: week${soptPos.length === 0 ? '' : 's'} ${soptPos.join(', ')}`);

  const d3props = {
    margin,
    width: distWidth,
    height: distHeight,
    xs: d3.scale.linear().domain([-maxSD, maxSD]).range([0, distWidth]),
    ys: d3.scale.linear().domain([0, maxDistHeight]).range([distHeight, 0]),
    xrange: [-maxSD, maxSD]
  };

  return (
    <div style={style}>
      <svg id = "distPlot" width = {width} height = {height}>
      {
        sds.map((d, i) =>
          <DistNormal
            index = {i}
            key = {`distnorm${i}-${sds.length}`}
            d3 = {d3props}
            sd = {d}
            lab = {labs[i]}
            color = {i === sds.length - 1 ? '#D62728' : colors[i]}
          />
        )
      }
      </svg>
    </div>
  );
};

DistPlot.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  pos: React.PropTypes.array,
  optSD: React.PropTypes.number
};

export default DistPlot;
