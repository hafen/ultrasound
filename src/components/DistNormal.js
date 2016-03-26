import React from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

const gaussian = (x, sigma) =>
  Math.exp(-0.5 * (x / sigma) * (x / sigma)) / sigma;

const DistNormalD3 = {};

class DistNormal extends React.Component {
  componentDidMount() {
    this.d3Node = d3.select(ReactDOM.findDOMNode(this));
    this.d3Node
      .call(DistNormalD3.enter.bind(this, this.props));
  }
  shouldComponentUpdate() {
    return true;
  }
  componentDidUpdate() {
    this.d3Node
      .call(DistNormalD3.update.bind(this, this.props));
  }
  render() {
    return (
      <g>
        <rect
          x = {this.props.d3.width - 200}
          y = {10 + this.props.index * 30}
          height = {25}
          width = {25}
          fill = {this.props.color}
          stroke = {this.props.color}
          strokeWidth = {2}
          fillOpacity = {0.65}
        />
        <text
          x = {this.props.d3.width - 168}
          y = {27 + this.props.index * 30}
          fontSize = {13}
        >{this.props.lab}</text>
      </g>
    );
  }
}

DistNormal.propTypes = {
  d3: React.PropTypes.object,
  color: React.PropTypes.string,
  lab: React.PropTypes.string,
  index: React.PropTypes.number
};

export default DistNormal;

DistNormalD3.enter = (props, selection) => {
  const line = d3.svg.line()
    .x((d) => props.d3.xs(d.x))
    .y((d) => props.d3.ys(d.y));

  const data = [];
  const delta = props.d3.xrange[1] / 300;
  for (let i = props.d3.xrange[0]; i <= props.d3.xrange[1]; i = i + delta) {
    data.push({ x: i, y: gaussian(i, props.sd) });
  }
  const data2 = [];
  data2.push({ x: -2 * props.sd, y: 0 });
  const N = 200; let cur = 0;
  for (let i = 0; i <= N; i++) {
    cur = -2 * props.sd + (i * 4 * props.sd) / N;
    data2.push({ x: cur, y: gaussian(cur, props.sd) });
  }
  data2.push({ x: 2 * props.sd, y: 0 });

  const g = selection.append('g')
    .attr('transform',
      `translate(${props.d3.margin.left},${props.d3.margin.top})`);

  g.append('path')
    .attr('class', 'line')
    .attr('d', line(data))
    .attr('fill', 'none')
    .attr('stroke', props.color);

  g.append('path')
    .attr('class', 'fill')
    .attr('d', line(data2))
    .attr('fill', props.color)
    .attr('fill-opacity', 0.65)
    .attr('stroke', 'none');

  if (props.index === 0) {
    const xaxis = d3.svg.axis().scale(props.d3.xs).orient('bottom');

    g.append('g')
      .attr('class', 'xaxis')
      .attr('transform', `translate(0,${props.d3.height})`)
      .call(xaxis);
  }
};

DistNormalD3.update = (props, selection) => {
  const line = d3.svg.line()
    .x((d) => props.d3.xs(d.x))
    .y((d) => props.d3.ys(d.y));

  const data = [];
  const delta = props.d3.xrange[1] / 300;
  for (let i = props.d3.xrange[0]; i <= props.d3.xrange[1]; i = i + delta) {
    data.push({ x: i, y: gaussian(i, props.sd) });
  }
  const data2 = [];
  data2.push({ x: -2 * props.sd, y: 0 });
  const N = 200; let cur = 0;
  for (let i = 0; i <= N; i++) {
    cur = -2 * props.sd + (i * 4 * props.sd) / N;
    data2.push({ x: cur, y: gaussian(cur, props.sd) });
  }
  data2.push({ x: 2 * props.sd, y: 0 });

  selection.select('.line')
    .transition().duration(500)
    .attr('d', line(data));

  selection.select('.fill')
    .transition().duration(500)
    .attr('d', line(data2));

  const xaxis = d3.svg.axis().scale(props.d3.xs).orient('bottom');

  selection.select('.xaxis')
    .transition().duration(500)
    .call(xaxis);
};
