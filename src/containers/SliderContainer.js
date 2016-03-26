import { connect } from 'react-redux';
import { setMeasureTime } from '../actions';
import Slider from '../components/Slider';

const mapStateToProps = (state) => (
  {
    pos: state.optMeasureTimes,
    handleWidth: 50,
    handleHeight: 50,
    breaks: 28,
    width: 900
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onTimeChange: (val, index) => {
      dispatch(setMeasureTime({ val, index }));
    }
  }
);

const SliderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider);

export default SliderContainer;
