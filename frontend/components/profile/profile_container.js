import { connect } from 'react-redux';
import { fetchDesiredUser } from '../../actions/user_actions';
import Profile from './profile';
import { selectBoardsForUser } from '../../reducers/selectors';

const mapStateToProps = ({ entities: { users, boards }, usernameMapping }, ownProps) => {
  const userId = usernameMapping[ownProps.match.params.username];
  return {
    user: users[userId],
    boards: selectBoardsForUser(boards, userId)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDesiredUser: id => dispatch(fetchDesiredUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
