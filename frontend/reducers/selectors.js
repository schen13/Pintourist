export const selectBoardsForUser = (boards, userId) => (
  Object.values(boards).filter(board => board.userId === userId)
);

export const selectPinsForUser = (pins, userId) => (
  Object.values(pins).filter(pin => pin.userId === userId)
);

export const selectPinsForBoard = (pinnings, pins, boardId) => (
  Object.values(pinnings)
    .filter(pinning => pinning.boardId === boardId)
    .map(pinning => pins[pinning.pinId])
);
