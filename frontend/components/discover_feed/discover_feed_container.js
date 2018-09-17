import { connect } from 'react-redux';
import DiscoverFeed from './discover_feed';
import { fetchAllPins } from '../../actions/pin_actions';
import { fetchAllUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
  pins: state.entities.pins
});

const mapDispatchToProps = dispatch => ({
  fetchAllPins: () => dispatch(fetchAllPins()),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverFeed);