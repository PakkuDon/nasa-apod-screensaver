import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Screensaver from '../components/Screensaver';

const App = connect(
  state => ({
    loading: state.loading,
    images: state.images,
    index: state.index
  }),
  dispatch => (
    bindActionCreators(actions, dispatch)
  )
)(Screensaver);

export default App;
