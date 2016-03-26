import { connect } from 'react-redux';
import DistPlot from '../components/DistPlot';

const mapStateToProps = (state) => (
  {
    pos: state.measureTimes,
    optPos: state.optMeasureTimes,
    optSD: state.optSD,
    width: 900,
    height: 350
  }
);

const DistPlotContainer = connect(
  mapStateToProps
)(DistPlot);

export default DistPlotContainer;
