json.pins do
  json.array!(@search_results[:pins]) do |pin|
    json.extract! pin, :id, :user_id, :url, :description
    json.photoUrl url_for(pin.photo)
  end
end

json.boards do
  json.array!(@search_results[:boards]) do |board|
    json.extract! board, :id, :user_id, :title, :description
  end
end

json.users do
  json.array!(@search_results[:users]) do |user|
    json.extract! user, :id, :username, :fname, :lname, :email
    json.photoUrl url_for(user.photo) if user.photo.attached?
  end
end