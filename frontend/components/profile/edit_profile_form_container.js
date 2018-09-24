import { connect } from 'react-redux';
import { updateUser, removeUserErrors } from '../../actions/user_actions';
import EditProfileForm from './edit_profile_form';

const mapStateToProps = ({ entities: { users }, errors, session }) => ({
  errors: errors.user,
  user: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  processForm: (user, id) => dispatch(updateUser(user, id)),
  clearErrors: () => dispatch(removeUserErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
