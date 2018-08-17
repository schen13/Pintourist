export const fetchAllBoards = () => (
  $.ajax({
    method: 'GET',
    url: 'api/boards'
  })
);

export const fetchSingleBoard = id => (
  $.ajax({
    method: 'GET',
    url: `api/boards/${id}`
  })
);

export const createBoard = board => (
  $.ajax({
    method: 'POST',
    url: `api/boards`,
    data: { board }
  })
);

export const updateBoard = board => {
  return $.ajax({
    method: 'PATCH',
    url: `api/boards/${board.id}`,
    data: { board }
  });

};

export const deleteBoard = boardId => (
  $.ajax({
    method: 'DELETE',
    url: `api/boards/${boardId}`
  })
);