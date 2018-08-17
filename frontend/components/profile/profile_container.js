import { connect } from 'react-redux';
import { fetchDesiredUser } from '../../actions/user_actions';
import { fetchAllPins } from '../../actions/pin_actions';
import Profile from './profile';
import {
  selectBoardsForUser,
  selectPinsForUser
} from '../../reducers/selectors';

const mapStateToProps = ({ entities: { users, boards, pins }, usernameMapping }, ownProps) => {
  return {
    usernameMapping,
    users,
    boards,
    pins
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDesiredUser: id => dispatch(fetchDesiredUser(id)),
  fetchAllPins: () => dispatch(fetchAllPins())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
