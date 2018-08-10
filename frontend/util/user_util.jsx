export const fetchDesiredUser = id => (
  $.ajax({
    method: "GET",
    url: `api/users/${id}`
  })
);

