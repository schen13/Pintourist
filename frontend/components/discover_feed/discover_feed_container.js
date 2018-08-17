import { connect } from 'react-redux';
import DiscoverFeed from './discover_feed';
import { fetchAllPins } from '../../actions/pin_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { nowLoading, stopLoading } from '../../actions/loading_actions';

const mapStateToProps = (state) => {
  return {
    pins: state.entities.pins,
    loading: state.ui.loading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllPins: () => dispatch(fetchAllPins()),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  nowLoading: () => dispatch(nowLoading()),
  stopLoading: () => dispatch(stopLoading()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverFeed);