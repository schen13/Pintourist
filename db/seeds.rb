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
Pinning.destroy_all

user1 = User.create!(
  username: "demo_user",
  fname: "Demo",
  lname: "User",
  email: "demo@demo.com",
  password: "password"
)
user2 = User.create!(
  username: "pandas4life",
  fname: "Steven",
  lname: "Chen",
  email: "steven.chen313@gmail.com",
  password: "goawayhackers"
)
user3 = User.create!(
  username: "travel_geek",
  fname: "Ben",
  lname: "There",
  email: "ben.there@travel.io",
  password: "i<3traveling"
)
user4 = User.create!(
  username: "seven_wonders",
  fname: "Stevie",
  lname: "Wonder",
  email: "stevie.wonder@travel.io",
  password: "lifeiswonderful"
)

board1 = Board.create!(
  user_id: user1.id,
  title: "Places to Visit",
  description: "Add these places to your bucket list!!"
)
board2 = Board.create!(
  user_id: user1.id,
  title: "More Places to Visit",
  description: "Even more places to add to your bucket list!!!"
)
board3 = Board.create!(
  user_id: user2.id,
  title: "Let's Go to China",
  description: "Panda Panda Panda Panda"
)
board4 = Board.create!(
  user_id: user2.id,
  title: "WHOA",
  description: "Just trust me on these."
)
board5 = Board.create!(
  user_id: user3.id,
  title: "Hidden Gems",
  description: "You probably haven't heard of them."
)
board6 = Board.create!(
  user_id: user4.id,
  title: "New Seven Wonders of the World",
  description: "Because six of the first seven don't even exist anymore"
)
board7 = Board.create!(
  user_id: user4.id,
  title: "Seven Natural Wonders of the World",
  description: "Because who doesn't like wonders?"
)
board8 = Board.create!(
  user_id: user3.id,
  title: "Not-So-Hidden Gems",
  description: "You probably have heard of them."
)

# Images from pixabay.com and unsplash.com
pin1 = Pin.new(
  user_id: user1.id, 
  url: "https://www.society19.com/5-amazing-places-visit-japan/", 
  description: "Check out the best of what Japan has to offer" 
)
pin1.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/cherry_blossom.jpg'), filename: 'cherry_blossom.jpg')
pin1.save!

pin2 = Pin.new(
  user_id: user1.id,
  url: "http://www.visitgreece.gr/en/greek_islands/santorini",
  description: "Exquisitely blue waters, picturesque architecture, all on an active volcano? What more could you ask for?"
)
pin2.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/santorini.jpg'), filename: 'santorini.jpg')
pin2.save!

pin3 = Pin.new(
  user_id: user1.id,
  url: "https://neuschwansteincastle.net/neuschwanstein-tour-information/",
  description: "A castle straight out of a fairytale, so much so that it inspired Walt Disney's Magic Kingdom. Wow. Majestic, no?"
)
pin3.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/Neuschwanstein.jpg'), filename: 'Neuschwanstein.jpg')
pin3.save!

pin4 = Pin.new(
  user_id: user1.id,
  url: "https://www.louvre.fr/en",
  description: "World's largest and most iconic museum - the Louvre is timeless."
)
pin4.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/louvre.jpg'), filename: 'louvre.jpg')
pin4.save!

pin5 = Pin.new(
  user_id: user1.id,
  url: "https://www.icelandtravel.is/northern-lights/",
  description: "The legendary northern lights - Aurora Borealis. Harbingers of war and famine? Spirits of ancestors past? Solar winds colliding with Earth's magnetic shield? Find out for yourself!"
)
pin5.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/aurora.jpg'), filename: 'aurora.jpg')
pin5.save!

pin6 = Pin.new(
  user_id: user2.id,
  url: "https://www.chinahighlights.com/yixing/attraction/the-sea-of-bamboo.htm",
  description: "Yixing's most popular attraction and the biggest bamboo forest in China. No wonder it's called the Sea of Bamboo!"
)
pin6.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/bamboo_forest.jpg'), filename: 'bamboo_forest.jpg')
pin6.save!

pin7 = Pin.new(
  user_id: user2.id,
  url: "https://www.travelchinaguide.com/attraction/sichuan/chengdu/panda-breeding-and-research-center.htm",
  description: "Giant panda research base. Pandas. Enough said."
)
pin7.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/panda.jpg'), filename: 'panda.jpg')
pin7.save!

pin8 = Pin.new(
  user_id: user2.id,
  url: "http://www.tourjiuzhaigou.com/jiuzhaigou-china-tours.html",
  description: "Probably the prettiest lakes and waterfalls I've ever seen."
)
pin8.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/jiuzhaigou.jpg'), filename: 'jiuzhaigou.jpg')
pin8.save!

pin9 = Pin.new(
  user_id: user2.id,
  url: "https://www.tibettravel.org/tibet-travel-guide/potala-palace/",
  description: "Potala Palace - truly a castle on a hill"
)
pin9.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/potala_palace.jpg'), filename: 'potala_palace.jpg')
pin9.save!

pin10 = Pin.new(
  user_id: user2.id,
  url: "https://www.touristisrael.com/old-city-jerusalem/403/",
  description: "The home of the Western Wall, the last remaining wall of the Jewish Temple. The home of the Dome of the Rock, where Muhammad is said to have risen to heaven. The home of the Church of the Sepulcher, where Jesus is said to have been crucified and buried. Old Town Jerusalem is a must-see."
)
pin10.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/jerusalem.jpg'), filename: 'jerusalem.jpg')
pin10.save!

pin11 = Pin.new(
  user_id: user2.id,
  url: "https://visitgreenland.com/providers/icecap-tours/",
  description: "See the polar ice caps while you still can :("
)
pin11.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/ice_caps.jpg'), filename: 'ice_caps.jpg')
pin11.save!

pin12 = Pin.new(
  user_id: user2.id,
  url: "https://www.nationalgeographic.com/expeditions/destinations/africa/journeys/tanzania-safari-serengeti-tour/",
  description: "You haven't truly lived if you haven't gone on a safari adventure."
)
pin12.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/serengeti.jpg'), filename: 'serengeti.jpg')
pin12.save!

pin13 = Pin.new(
  user_id: user3.id,
  url: "http://espacepourlavie.ca/en/botanical-garden",
  description: "Montreal Botanical Garden - Moana anyone?"
)
pin13.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/montreal_garden.jpg'), filename: 'montreal_garden.jpg')
pin13.save!

pin14 = Pin.new(
  user_id: user3.id,
  url: "http://www.huacachina.com/en/intro/index.htm",
  description: "How many people can say they've actually been to an oasis? Don't let your dreams be dreams."
)
pin14.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/huacachina.jpg'), filename: 'huacachina.jpg')
pin14.save!

pin15 = Pin.new(
  user_id: user3.id,
  url: "https://news.southamerica.travel/marble-caves-patagonia-chile/",
  description: "These caves just blue me away."
)
pin15.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/marble_caves.jpg'), filename: 'marble_caves.jpg')
pin15.save!

pin16 = Pin.new(
  user_id: user3.id,
  url: "https://www.travelchinaguide.com/china_great_wall/",
  description: "Can you imagine how many people it took to build the Great Wall? Jeez..."
)
pin16.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/great_wall.jpg'), filename: 'great_wall.jpg')
pin16.save!

pin17 = Pin.new(
  user_id: user3.id,
  url: "https://whc.unesco.org/en/list/326",
  description: "Petra - Lost City of Stone"
)
pin17.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/petra.jpg'), filename: 'petra.jpg')
pin17.save!

pin18 = Pin.new(
  user_id: user3.id,
  url: "https://www.tripadvisor.com/ShowUserReviews-g303506-d554128-r157312254-Corcovado_Christ_the_Redeemer-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html",
  description: "Helicopter tour of Christ the Redeemer - once in a lifetime opportunity!"
)
pin18.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/christ.jpg'), filename: 'christ.jpg')
pin18.save!

pin19 = Pin.new(
  user_id: user3.id,
  url: "https://whc.unesco.org/en/list/274",
  description: "Machu Picchu is the embodiment of the Inca Empire's legacy. A citadel in a cloudy tropical forest - truly special."
)
pin19.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/machu_picchu.jpg'), filename: 'machu_picchu.jpg')
pin19.save!

pin20 = Pin.new(
  user_id: user3.id,
  url: "https://whc.unesco.org/en/list/483",
  description: "Chichen Itza After Dark - Goosebumps, 5/5 would visit again."
)
pin20.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/chichen_itza.jpg'), filename: 'chichen_itza.jpg')
pin20.save!

pin21 = Pin.new(
  user_id: user3.id,
  url: "http://www.bbc.co.uk/history/ancient/romans/colosseum_01.shtml",
  description: "Don't worry, you won't be forced to fight to the death."
)
pin21.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/colosseum.jpg'), filename: 'colosseum.jpg')
pin21.save!

pin22 = Pin.new(
  user_id: user3.id,
  url: "https://whc.unesco.org/en/list/252",
  description: "Muslim Marble Mausoleum, Taj Mahal"
)
pin22.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/taj_mahal.jpg'), filename: 'taj_mahal.jpg')
pin22.save!

pin23 = Pin.new(
  user_id: user3.id,
  url: "https://www.nps.gov/grca/index.htm",
  description: "News Flash: Water Carves Big Hole In Ground"
)
pin23.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/grand_canyon.jpg'), filename: 'grand_canyon.jpg')
pin23.save!

pin24 = Pin.new(
  user_id: user3.id,
  url: "http://www.greatbarrierreef.org/",
  description: "Go see the world's largest coral reef before it's too late :'("
)
pin24.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/great_barrier_reef.jpg'), filename: 'great_barrier_reef.jpg')
pin24.save!

pin25 = Pin.new(
  user_id: user3.id,
  url: "https://museudoamanha.org.br/livro/en/07-a-baia-de-guanabara-um-olhar-sobre-a-historia.html",
  description: "If you're in Rio de Janeiro for Christ the Redeemer, you can't miss Guanabara Bay. Like literally can't miss it."
)
pin25.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/guanabara_bay.jpg'), filename: 'guanabara_bay.jpg')
pin25.save!

pin26 = Pin.new(
  user_id: user3.id,
  url: "https://www.rmiguides.com/himalaya/everest",
  description: "Mount Everest - not for the faint of heart."
)
pin26.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/everest.jpg'), filename: 'everest.jpg')
pin26.save!

pin27 = Pin.new(
  user_id: user3.id,
  url: "https://www.tripadvisor.com/Attraction_Review-g150796-d153429-Reviews-Paricutin_Volcano-Central_Mexico_and_Gulf_Coast.html",
  description: "The Floor Is Lava: Real Life Edition"
)
pin27.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/paricutin.jpg'), filename: 'paricutin.jpg')
pin27.save!

pin28 = Pin.new(
  user_id: user3.id,
  url: "https://www.nationalgeographic.com/travel/world-heritage/victoria-falls/",
  description: "Victoria Falls, the largest waterfall in the world"
)
pin28.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/victoria_falls.jpg'), filename: 'victoria_falls.jpg')
pin28.save!

pin29 = Pin.new(
  user_id: user3.id,
  url: "https://www.nps.gov/yell/planyourvisit/exploreoldfaithful.htm",
  description: "Yellowstone's Old Faithful - more reliable than pulling an all-nighter to finish a project"
)
pin29.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/old_faithful.jpg'), filename: 'old_faithful.jpg')
pin29.save!

pin30 = Pin.new(
  user_id: user3.id,
  url: "https://www.japan-guide.com/e/e2172.html",
  description: "The beloved and sacred volcano, Mount Fuji"
)
pin30.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/mt_fuji.jpg'), filename: 'mt_fuji.jpg')
pin30.save!

pin31 = Pin.new(
  user_id: user3.id,
  url: "https://www.visitlasvegas.com/",
  description: "Lose yourself in the city of sin...with great wholesome food and fun!"
)
pin31.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/vegas.jpg'), filename: 'vegas.jpg')
pin31.save!

pin32 = Pin.new(
  user_id: user3.id,
  url: "https://www.cnn.com/travel/article/burj-khalifa-dubai-guide/index.html",
  description: "Want to feel on top of the world? Check out the world's tallest building, the Burj Khalifa."
)
pin32.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/burj_khalifa.jpg'), filename: 'burj_khalifa.jpg')
pin32.save!

pin33 = Pin.new(
  user_id: user3.id,
  url: "https://www.nps.gov/stli/index.htm",
  description: "Thanks France! You da best."
)
pin33.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/statue_of_liberty.jpg'), filename: 'statue_of_liberty.jpg')
pin33.save!

pin34 = Pin.new(
  user_id: user3.id,
  url: "https://www.timessquarenyc.org/",
  description: "Times Square - when watching the ball drop on New Year's is more important than life itself"
)
pin34.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/times_square.jpg'), filename: 'times_square.jpg')
pin34.save!

pin35 = Pin.new(
  user_id: user3.id,
  url: "http://www.towerofpisa.org/",
  description: "If you didn't take a picture while holding up the tower, were you even there?"
)
pin35.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/leaning_tower.jpg'), filename: 'leaning_tower.jpg')
pin35.save!

pin36 = Pin.new(
  user_id: user3.id,
  url: "https://disneyland.disney.go.com/",
  description: "Happiest place on earth :)"
)
pin36.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/disneyland.jpg'), filename: 'disneyland.jpg')
pin36.save!

pin37 = Pin.new(
  user_id: user3.id,
  url: "https://www.sydneyoperahouse.com/",
  description: "Shells on shells on shells"
)
pin37.photo.attach(io: File.open('/Users/stevenchen/app_academy/photos/opera_house.jpg'), filename: 'opera_house.jpg')
pin37.save!

pinning1 = Pinning.create!(board_id: board1.id, pin_id: pin1.id)
pinning2 = Pinning.create!(board_id: board1.id, pin_id: pin2.id)
pinning3 = Pinning.create!(board_id: board2.id, pin_id: pin3.id)
pinning4 = Pinning.create!(board_id: board2.id, pin_id: pin4.id)
pinning5 = Pinning.create!(board_id: board2.id, pin_id: pin5.id)
pinning6 = Pinning.create!(board_id: board3.id, pin_id: pin6.id)
pinning7 = Pinning.create!(board_id: board3.id, pin_id: pin7.id)
pinning8 = Pinning.create!(board_id: board3.id, pin_id: pin8.id)
pinning9 = Pinning.create!(board_id: board4.id, pin_id: pin9.id)
pinning10 = Pinning.create!(board_id: board4.id, pin_id: pin10.id)
pinning11 = Pinning.create!(board_id: board4.id, pin_id: pin11.id)
pinning12 = Pinning.create!(board_id: board4.id, pin_id: pin12.id)
pinning13 = Pinning.create!(board_id: board5.id, pin_id: pin13.id)
pinning14 = Pinning.create!(board_id: board5.id, pin_id: pin14.id)
pinning15 = Pinning.create!(board_id: board5.id, pin_id: pin15.id)
pinning16 = Pinning.create!(board_id: board6.id, pin_id: pin16.id)
pinning17 = Pinning.create!(board_id: board6.id, pin_id: pin17.id)
pinning18 = Pinning.create!(board_id: board6.id, pin_id: pin18.id)
pinning19 = Pinning.create!(board_id: board6.id, pin_id: pin19.id)
pinning20 = Pinning.create!(board_id: board6.id, pin_id: pin20.id)
pinning21 = Pinning.create!(board_id: board6.id, pin_id: pin21.id)
pinning22 = Pinning.create!(board_id: board6.id, pin_id: pin22.id)
pinning23 = Pinning.create!(board_id: board7.id, pin_id: pin23.id)
pinning24 = Pinning.create!(board_id: board7.id, pin_id: pin24.id)
pinning25 = Pinning.create!(board_id: board7.id, pin_id: pin25.id)
pinning26 = Pinning.create!(board_id: board7.id, pin_id: pin26.id)
pinning27 = Pinning.create!(board_id: board7.id, pin_id: pin27.id)
pinning28 = Pinning.create!(board_id: board7.id, pin_id: pin28.id)
pinning29 = Pinning.create!(board_id: board8.id, pin_id: pin29.id)
pinning30 = Pinning.create!(board_id: board8.id, pin_id: pin30.id)
pinning31 = Pinning.create!(board_id: board8.id, pin_id: pin31.id)
pinning32 = Pinning.create!(board_id: board8.id, pin_id: pin32.id)
pinning33 = Pinning.create!(board_id: board8.id, pin_id: pin33.id)
pinning34 = Pinning.create!(board_id: board8.id, pin_id: pin34.id)
pinning35 = Pinning.create!(board_id: board8.id, pin_id: pin35.id)
pinning36 = Pinning.create!(board_id: board8.id, pin_id: pin36.id)
pinning37 = Pinning.create!(board_id: board8.id, pin_id: pin37.id)
pinning38 = Pinning.create!(board_id: board7.id, pin_id: pin5.id)
pinning39 = Pinning.create!(board_id: board8.id, pin_id: pin5.id)
pinning40 = Pinning.create!(board_id: board1.id, pin_id: pin8.id)
pinning41 = Pinning.create!(board_id: board2.id, pin_id: pin14.id)
pinning42 = Pinning.create!(board_id: board1.id, pin_id: pin15.id)
pinning43 = Pinning.create!(board_id: board2.id, pin_id: pin16.id)
pinning44 = Pinning.create!(board_id: board8.id, pin_id: pin16.id)
pinning45 = Pinning.create!(board_id: board8.id, pin_id: pin19.id)
pinning46 = Pinning.create!(board_id: board1.id, pin_id: pin20.id)
pinning47 = Pinning.create!(board_id: board8.id, pin_id: pin20.id)
pinning48 = Pinning.create!(board_id: board1.id, pin_id: pin22.id)
pinning49 = Pinning.create!(board_id: board8.id, pin_id: pin22.id)
pinning50 = Pinning.create!(board_id: board2.id, pin_id: pin23.id)
pinning51 = Pinning.create!(board_id: board8.id, pin_id: pin23.id)
pinning52 = Pinning.create!(board_id: board8.id, pin_id: pin24.id)
pinning53 = Pinning.create!(board_id: board8.id, pin_id: pin26.id)
pinning54 = Pinning.create!(board_id: board1.id, pin_id: pin30.id)
pinning55 = Pinning.create!(board_id: board2.id, pin_id: pin36.id)




