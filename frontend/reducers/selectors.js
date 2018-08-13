export const selectBoardsForUser = (boards, userId) => (
  Object.values(boards).filter(board => board.user_id === userId)
);