import { connect } from 'react-redux';
import DistPlot from '../components/DistPlot';

const mapStateToProps = (state) => (
  {
    pos: state.get('measureTimes').toJS(),
    optPos: state.get('optMeasureTimes').toJS(),
    optSD: state.get('optSD'),
    width: 900,
    height: 350
  }
);

const DistPlotContainer = connect(
  mapStateToProps
)(DistPlot);

export default DistPlotContainer;
