export const OPEN_NOTIFICATION = 'OPEN_NOTIFICATION';
export const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION';

export const openNotification = message => ({
  type: OPEN_NOTIFICATION,
  message
});

export const closeNotification = () => ({
  type: CLOSE_NOTIFICATION,
});

