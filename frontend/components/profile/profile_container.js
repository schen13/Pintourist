import { connect } from 'react-redux';
import { fetchDesiredUser } from '../../actions/user_actions';
import Profile from './profile';
import {
  selectBoardsForUser,
  selectPinsForUser
} from '../../reducers/selectors';

const mapStateToProps = ({ entities: { users, boards, pins }, usernameMapping }, ownProps) => {
  const userId = usernameMapping[ownProps.match.params.username];
  return {
    user: users[userId],
    boards: selectBoardsForUser(boards, userId),
    pins: selectPinsForUser(pins, userId)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDesiredUser: id => dispatch(fetchDesiredUser(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
