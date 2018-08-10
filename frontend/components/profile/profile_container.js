import { connect } from 'react-redux';
import { fetchDesiredUser } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = ({ entities: { users } }, ownProps) => ({
  user: users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
  fetchDesiredUser: id => dispatch(fetchDesiredUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
