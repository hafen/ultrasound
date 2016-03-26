import React from 'react';
import Draggable from 'react-draggable';

const style = {
  boxSizing: 'border-box',
  // border: '1px solid #999',
  borderRadius: 3,
  backgroundColor: '#999',
  position: 'absolute',
  top: 0,
  opacity: 0.5,
  textAlign: 'center',
  verticalAlign: 'middle',
  fontWeight: 300,
  cursor: 'pointer',
  transition: 'border-color 0.1s ease-out'
};

class SliderHandle extends React.Component {
  constructor(props) {
    super(props);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.state = {
      pos: Math.round(props.start / this.props.segmentWidth) + 1,
      border: '1px solid #999',
      zIndex: 100,
      lineHeight: `${this.props.height - 2}px`
    };
  }
  handleStart() {
    this.setState({
      border: '3px solid #000',
      zIndex: 101,
      lineHeight: `${this.props.height - 6}px`
    });
  }
  handleDrag(event, ui) {
    let newPos = Math.round(ui.position.left /
     this.props.segmentWidth) + 1;
    newPos = Math.max(1, newPos);
    newPos = Math.min(this.props.breaks, newPos);
    this.setState({ pos: newPos });
  }
  handleStop() {
    const pos = Math.round(this.refs.drag.state.clientX / this.props.segmentWidth) + 1;
    this.setState({
      border: '1px solid #999',
      pos,
      zIndex: 100,
      lineHeight: `${this.props.height - 2}px`
    });
    this.props.onTimeChange(pos, this.props.index);
  }
  render() {
    style.width = this.props.width;
    style.height = this.props.height;
    style.fontSize = this.props.height / 3;
    style.border = this.state.border;
    style.zIndex = this.state.zIndex;
    style.lineHeight = this.state.lineHeight;

    return (
      <Draggable
        ref = "drag"
        bounds = {{ left: 0, top: 0, right: this.props.boundWidth, bottom: 0 }}
        axis = "x"
        start = {{ x: this.props.start, y: 0 }}
        grid = {[this.props.segmentWidth, 0]}
        onStart = {this.handleStart}
        onDrag = {this.handleDrag}
        onStop = {this.handleStop}
      >
        <div style={style}>
          {this.state.pos}
        </div>
      </Draggable>
    );
  }
}

SliderHandle.propTypes = {
  height: React.PropTypes.number,
  width: React.PropTypes.number,
  start: React.PropTypes.number,
  segmentWidth: React.PropTypes.number,
  boundWidth: React.PropTypes.number,
  breaks: React.PropTypes.number,
  index: React.PropTypes.number,
  onTimeChange: React.PropTypes.func
};

export default SliderHandle;

// console.log('Event: ', event);
// console.log('Position: ', ui.position.left);
