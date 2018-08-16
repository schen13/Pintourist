# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Board.destroy_all
Pin.destroy_all

user1 = User.create!(username: "demo_user", fname: "Demo", lname: "User", email: "demo@demo.com", password: "password")
board1 = Board.create!(user_id: user1.id, title: "Places to Visit", description: "Top destinations")
board2 = Board.create!(user_id: user1.id, title: "More Places to Visit")
pin1 = Pin.new(
  user_id: user1.id, 
  url: "https://www.society19.com/5-amazing-places-visit-japan/", 
  description: "5 Amazing Places to Visit in Japan", 
);
pin1.photo.attach(io: File.open('/Users/stevenchen/app_academy/Pintourist/app/assets/images/logo.png'), filename: 'logo.png')
pin1.save!
pinning1 = Pinning.create!(board_id: board1.id, pin_id: pin1.id);

