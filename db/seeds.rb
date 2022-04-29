# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.destroy_all
Trail.destroy_all
Tag.destroy_all
TrailTag.destroy_all
Review.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

# sample user DON'T FORGET ID OTHERWISE 'undefined' keys under entities > users
demo = User.create(first_name: 'Steph', last_name: 'Curry', email: 'chefcurry@demo.com', password: 'godubs', bio: 'I am the demo user!')
fake_user_1 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: 'I love long walks')
fake_user_2 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: 'I run like the wind')
fake_user_3 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: 'My dog loves hiking with me!!')
fake_user_4 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: 'Looking for my next trail!')
fake_user_5 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: 'I\'m from California and love the outdoors')

dipsea = Trail.create!(t_name: 'Dipsea Trail, Steep Ravine Trail, and Matt Davis Loop', longitude: -122.63602, latitude: 37.89665, length: "7.5 mi", difficulty_level: 'moderate', elevation_gain: "1,689 ft", route_type: 'Loop', estimated_time: 'Est. 3h 40m', description: 'Discover this 7.5-mile loop trail near Mill Valley, California. Generally considered a moderately challenging route, it takes an average of 3 h 40 min to complete. This is a very popular area for hiking and trail running, so you\'ll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime.', state: 'California', country: 'United States of America', park_id: 1)

stinson = Trail.create!(t_name: 'Stinson Beach to Mount Tamalpais via Matt Davis Trail', longitude: -122.63742, latitude: 37.89978, length: "15.2 mi", difficulty_level: 'hard', elevation_gain: "3,513 ft", route_type: 'Loop', estimated_time: 'Est. 7h 28m', description: 'Experience this 15.2-mile loop trail near Stinson Beach, California. Generally considered a challenging route, it takes an average of 7 h 28 min to complete. This is a very popular area for backpacking, birding, and camping, so you\'ll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime.', state: 'California', country: 'United States of America', park_id: 1)

muir_woods = Trail.create!(t_name: 'Muir Woods via the Bootjack Trail', longitude: -122.63742, latitude: 37.89978, length: "7.1 mi", difficulty_level: 'moderate', elevation_gain: "1,496 ft", route_type: 'Loop', estimated_time: 'Est. 3h 24m', description: 'Experience this 7.1-mile loop trail near Mill Valley, California. Generally considered a moderately challenging route, it takes an average of 3 h 24 min to complete. This is a popular trail for birding, hiking, and trail running, but you can still enjoy some solitude during quieter times of day. The trail is open year-round and is beautiful to visit anytime.', state: 'California', country: 'United States of America', park_id: 1)

ten_valley = Trail.create!(t_name: 'Tennessee Beach and Pirates Cove via Coastal, Middle Green Gulch, Coyote Ridge, Fox, and Tennessee Valley Trail Loop', longitude: -122.57553, latitude: 37.86123, length: "9.1 mi", difficulty_level: 'moderate', elevation_gain: "1,833 ft", route_type: 'Loop', estimated_time: 'Est. 4h 18m', description: 'Head out on this 9.1-mile loop trail near Muir Beach, California. Generally considered a moderately challenging route, it takes an average of 4 h 18 min to complete. This is a popular trail for birding, hiking, and trail running, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are April through September. Dogs are welcome, but must be on a leash.', state: 'California', country: 'United States of America', park_id: 2)

# park 1 = Mount Tamalpais
# park 2 = marin headlands

dogs = Tag.create!(description: 'Dogs on leash')
wheelchair = Tag.create!(description: 'Wheelchair friendly')
kids = Tag.create!(description: 'Kid friendly')
stroller = Tag.create!(description: 'Stroller friendly')
road_biking = Tag.create!(description: 'Road biking')
walking = Tag.create!(description: 'Walking')
running = Tag.create!(description: 'Running')
paved = Tag.create!(description: 'Paved')
river = Tag.create!(description: 'River')
views = Tag.create!(description: 'Views')
forest = Tag.create!(description: 'Forest')
wildflowers = Tag.create!(description: 'Wildflowers')
wildlife = Tag.create!(description: 'Wildlife')
waterfall = Tag.create!(description: 'waterfall')
birds = Tag.create!(description: 'Bird watching')
trails = Tag.create!(description: 'Rails trails')
camping = Tag.create!(description: 'camping')
backpacking = Tag.create!(description: 'Backpacking')
beach = Tag.create!(description: 'Beach')

tag1 = TrailTag.create!(tag_id: 1, trail_id: 1)
tag2 = TrailTag.create!(tag_id: 3, trail_id: 1)
tag3 = TrailTag.create!(tag_id: 4, trail_id: 1)
tag4 = TrailTag.create!(tag_id: 2, trail_id: 1)
tag5 = TrailTag.create!(tag_id: 5, trail_id: 1)
tag6 = TrailTag.create!(tag_id: 6, trail_id: 1)
tag7 = TrailTag.create!(tag_id: 15, trail_id: 1)
tag8 = TrailTag.create!(tag_id: 7, trail_id: 1)
tag9 = TrailTag.create!(tag_id: 19, trail_id: 1)
tag10 = TrailTag.create!(tag_id: 11, trail_id: 1)
tag11 = TrailTag.create!(tag_id: 17, trail_id: 1)
tag12 = TrailTag.create!(tag_id: 18, trail_id: 1)
tag12 = TrailTag.create!(tag_id: 8, trail_id: 1)

tag13 = TrailTag.create!(tag_id: 1, trail_id: 2)
tag23 = TrailTag.create!(tag_id: 3, trail_id: 2)
tag33 = TrailTag.create!(tag_id: 4, trail_id: 2)
tag43 = TrailTag.create!(tag_id: 2, trail_id: 2)
tag53 = TrailTag.create!(tag_id: 5, trail_id: 2)
tag63 = TrailTag.create!(tag_id: 6, trail_id: 2)
tag73 = TrailTag.create!(tag_id: 15, trail_id: 2)
tag83 = TrailTag.create!(tag_id: 11, trail_id: 2)
tag93 = TrailTag.create!(tag_id: 17, trail_id: 2)
tag103 = TrailTag.create!(tag_id: 18, trail_id: 2)

tag2 = TrailTag.create!(tag_id: 3, trail_id: 3)
tag3 = TrailTag.create!(tag_id: 4, trail_id: 3)
tag4 = TrailTag.create!(tag_id: 2, trail_id: 3)
tag5 = TrailTag.create!(tag_id: 5, trail_id: 3)
tag6 = TrailTag.create!(tag_id: 6, trail_id: 3)
tag8 = TrailTag.create!(tag_id: 7, trail_id: 3)
tag9 = TrailTag.create!(tag_id: 19, trail_id: 3)
tag10 = TrailTag.create!(tag_id: 11, trail_id: 3)
tag12 = TrailTag.create!(tag_id: 18, trail_id: 3)

tag24 = TrailTag.create!(tag_id: 3, trail_id: 4)
tag34 = TrailTag.create!(tag_id: 4, trail_id: 4)
tag44 = TrailTag.create!(tag_id: 2, trail_id: 4)
tag54 = TrailTag.create!(tag_id: 5, trail_id: 4)
tag64 = TrailTag.create!(tag_id: 6, trail_id: 4)
tag74 = TrailTag.create!(tag_id: 15, trail_id: 4)
tag84 = TrailTag.create!(tag_id: 7, trail_id: 4)
tag94 = TrailTag.create!(tag_id: 19, trail_id: 4)
tag104 = TrailTag.create!(tag_id: 11, trail_id: 4)
tag114 = TrailTag.create!(tag_id: 17, trail_id: 4)
tag124 = TrailTag.create!(tag_id: 18, trail_id: 4)
tag124 = TrailTag.create!(tag_id: 8, trail_id: 4)

review_1 = Review.create!(user_id: 1, trail_id: 1, photo_id: 1, rating: 4, description: 'So fantastic', date_hiked: '2022-11-11')
review_2 = Review.create!(user_id: 4, trail_id: 4, photo_id: 4, rating: 4, description: 'My dog loved this hike', date_hiked: '2022-11-11')
review_3 = Review.create!(user_id: 3, trail_id: 1, photo_id: 5, rating: 5, description: 'Great for the family', date_hiked: '2022-11-11')
review_4 = Review.create!(user_id: 2, trail_id: 1, photo_id: 7, rating: 4, description: 'So beautiful!', date_hiked: '2022-11-11')
review_5 = Review.create!(user_id: 2, trail_id: 2, photo_id: 8, rating: 5, description: 'I bring my kids here all the time', date_hiked: '2022-11-11')