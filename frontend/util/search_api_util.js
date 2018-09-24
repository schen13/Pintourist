export const fetchAllResults = query => {
  return $.ajax({
    method: 'GET',
    url: 'api/searches',
    data: { query }
  });
};