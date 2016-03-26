import { connect } from 'react-redux';
import { setNumMeasure } from '../actions';
import SelectN from '../components/SelectN';

const mapStateToProps = (state) => (
  {
    selected: state.numMeasure
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onNumChange: (n) => {
      dispatch(setNumMeasure(n));
    }
  }
);

const SelectNContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectN);

export default SelectNContainer;
