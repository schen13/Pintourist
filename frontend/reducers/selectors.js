export const selectBoardsForUser = (boards, userId) => (
  Object.values(boards).filter(board => board.userId === userId)
);

export const selectPinsForUser = (pins, userId) => (
  Object.values(pins).filter(pin => pin.userId === userId)
);

export const selectPinsForBoard = (pinnings, pins, boardId) => {
  const boardPinnings = Object.values(pinnings)
    .filter(pinning => pinning.boardId === boardId);
  console.log(boardPinnings);
  console.log(pins);
  const boardPins = boardPinnings.map(pinning => pins[pinning.pinId]);
  return boardPins;
};

export const selectBoardIdFromBoardTitle = (boards, boardTitle) => (
  Object.values(boards)
    .filter(board => board.title === boardTitle)
);