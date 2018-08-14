export const selectBoardsForUser = (boards, userId) => (
  Object.values(boards).filter(board => board.user_id === userId)
);

export const selectPinsForUser = (pins, userId) => (
  Object.values(pins).filter(pin => pin.user_id === userId)
);