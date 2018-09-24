import React from 'react';
import { connect } from 'react-redux';

const Notification = ({ notification, closeNotification }) => {
  if (!notification) return null;
  return (
    <div className="notification-container">
      {notification}
    </div>
  );
};

import { closeNotification } from '../actions/notification_actions';

const mapStateToProps = ({ ui: { notification } }) => ({
  notification
});

const mapDispatchToProps = dispatch => ({
  closeNotification: () => dispatch(closeNotification())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (Notification);