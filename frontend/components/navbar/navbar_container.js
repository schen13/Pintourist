import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { openPinModal } from '../../actions/modal_actions';

const mapStateToProps = ({ entities: { users }, session }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openPinModal: () => dispatch(openPinModal('create'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
