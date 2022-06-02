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
Condition.destroy_all  
ReviewCondition.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

# sample user DON'T FORGET ID OTHERWISE 'undefined' keys under entities > users
demo = User.create(first_name: 'Demo', last_name: 'Curry', email: 'chefcurry@demo.com', password: 'godubs', bio: 'I am the demo user!')
fake_user_1 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: 'I love long walks')
fake_user_2 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: 'I run like the wind')
fake_user_3 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: 'My dog loves hiking with me!!')
fake_user_4 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: 'Looking for my next trail!')
fake_user_5 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: 'I\'m from California and love the outdoors')
fake_user_6 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_7 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_8 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_9 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_10 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_11 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_12 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_13 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_14= User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_15= User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_16 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_17 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_18 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_19 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_20 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_21 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_22 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_23 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_24 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_25 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_26 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_27 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_28 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_29 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_30 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')
fake_user_31 = User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'godubs', bio: '')

# mount tamalpais
dipsea = Trail.create!(t_name: 'Dipsea Trail, Steep Ravine Trail, and Matt Davis Loop', longitude: -122.63602, latitude: 37.89665, length: "7.5 mi", difficulty_level: 'moderate', elevation_gain: "1,689 ft", route_type: 'Loop', estimated_time: 'Est. 3h 40m', description: 'Discover this 7.5-mile loop trail near Mill Valley, California. Generally considered a moderately challenging route, it takes an average of 3 h 40 min to complete. This is a very popular area for hiking and trail running, so you\'ll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime.', state: 'California', country: 'United States of America', park_id: 1)
stinson = Trail.create!(t_name: 'Stinson Beach to Mount Tamalpais via Matt Davis Trail', longitude: -122.63742, latitude: 37.89978, length: "15.2 mi", difficulty_level: 'hard', elevation_gain: "3,513 ft", route_type: 'Loop', estimated_time: 'Est. 7h 28m', description: 'Experience this 15.2-mile loop trail near Stinson Beach, California. Generally considered a challenging route, it takes an average of 7 h 28 min to complete. This is a very popular area for backpacking, birding, and camping, so you\'ll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime.', state: 'California', country: 'United States of America', park_id: 1)
muir_woods = Trail.create!(t_name: 'Muir Woods via the Bootjack Trail', longitude: -122.60405, latitude: 37.90428, length: "7.1 mi", difficulty_level: 'moderate', elevation_gain: "1,496 ft", route_type: 'Loop', estimated_time: 'Est. 3h 24m', description: 'Experience this 7.1-mile loop trail near Mill Valley, California. Generally considered a moderately challenging route, it takes an average of 3 h 24 min to complete. This is a popular trail for birding, hiking, and trail running, but you can still enjoy some solitude during quieter times of day. The trail is open year-round and is beautiful to visit anytime.', state: 'California', country: 'United States of America', park_id: 1)
# marin headlands
ten_valley = Trail.create!(t_name: 'Tennessee Beach and Pirates Cove via Coastal, Middle Green Gulch, Coyote Ridge, Fox, and Tennessee Valley Trail Loop', longitude: -122.57553, latitude: 37.86123, length: "9.1 mi", difficulty_level: 'moderate', elevation_gain: "1,833 ft", route_type: 'Loop', estimated_time: 'Est. 4h 18m', description: 'Head out on this 9.1-mile loop trail near Muir Beach, California. Generally considered a moderately challenging route, it takes an average of 4 h 18 min to complete. This is a popular trail for birding, hiking, and trail running, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are April through September. Dogs are welcome, but must be on a leash.', state: 'California', country: 'United States of America', park_id: 2)
rodeo_beach = Trail.create!(t_name: 'Rodeo Beach, Miwok Trail, and Coastal Trail', longitude: -122.53972, latitude: 37.83202, length: "5.3 mi", difficulty_level: 'moderate', elevation_gain: "1,076 ft", route_type: 'Loop', estimated_time: 'Est. 2h 31m', description: 'Enjoy this 5.3-mile loop trail near Muir Beach, California. Generally considered a moderately challenging route, it takes an average of 2 h 31 min to complete. This is a very popular area for birding, hiking, and horseback riding, so you\'ll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome and may be off-leash in some areas.', state: 'California', country: 'United States of America', park_id: 2)

# Yosemite National Park
mist_trail = Trail.create!(t_name: 'Vernal and Nevada Falls via Mist Trail', longitude: -119.55782, latitude: 37.73279, length: "6.0 mi", difficulty_level: 'hard', elevation_gain: "2,621 ft", route_type: 'Loop', estimated_time: 'Est. 3h 27m', description: 'Check out this 6.0-mile loop trail near Yosemite Valley, California. Generally considered a challenging route, it takes an average of 3 h 27 min to complete. This is a very popular area for hiking, so you\'ll likely encounter other people while exploring. The best times to visit this trail are May through October.', state: 'California', country: 'United States of America', park_id: 3)
half_dome = Trail.create!(t_name: 'Half Dome via the John Muir Trail (JMT)', longitude: -119.55159, latitude: 37.73275, length: "15.0 mi", difficulty_level: 'hard', elevation_gain: "5,193 ft", route_type: 'Out & back', estimated_time: 'Est. 8h 30m', description: 'Check out this 6.0-mile loop trail near Yosemite Valley, California. Generally considered a challenging route, it takes an average of 3 h 27 min to complete. This is a very popular area for hiking, so you\'ll likely encounter other people while exploring. The best times to visit this trail are May through October.', state: 'California', country: 'United States of America', park_id: 3)
panum_crater = Trail.create!(t_name: 'Panum Crater Trail', longitude: -119.04874, latitude: 37.92572, length: "2.1 mi", difficulty_level: 'easy', elevation_gain: "416 ft", route_type: 'Loop', estimated_time: 'Est. 59m', description: 'Head out on this 2.1-mile loop trail near Lee Vining, California. Generally considered a moderately challenging route, it takes an average of 59 min to complete. This is a popular trail for birding, hiking, and walking, but you can still enjoy some solitude during quieter times of day. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.', state: 'California', country: 'United States of America', park_id: 3)

# zion National Park

angels_landing = Trail.create!(t_name: 'Angels Landing Trail', longitude: -112.95122, latitude: 37.25909, length: "4.4 mi", difficulty_level: 'hard', elevation_gain: "1,604 ft", route_type: 'Out & back', estimated_time: 'Est. 2h 33m', description: 'Get to know this 4.4-mile out-and-back trail near Springdale, Utah. Generally considered a challenging route, it takes an average of 2 h 33 min to complete. This is a very popular area for hiking, so you\'ll likely encounter other people while exploring. The best times to visit this trail are February through October.', state: 'Utah', country: 'United States of America', park_id: 4)
watchman_trail = Trail.create!(t_name: 'Watchman Trail', longitude: -112.98652, latitude: 37.20134, length: "3.1 mi", difficulty_level: 'moderate', elevation_gain: "636 ft", route_type: 'Out & back', estimated_time: 'Est. 1h 28m', description: 'Try this 3.1-mile out-and-back trail near Springdale, Utah. Generally considered a moderately challenging route, it takes an average of 1 h 28 min to complete. This is a very popular area for camping, hiking, and trail running, so you\'ll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime.', state: 'Utah', country: 'United States of America', park_id: 4)


# park 1 = Mount Tamalpais
# park 2 = marin headlands
# park 3 = Yosemite National Park
# park 4 = Zion National Park

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

# ['Backpacking', 
# 'Bird watching', 
# 'Bike touring', 
# 'Camping', 
# 'Cross-country skiing', 
# 'Fishing', 
# 'Hiking', 
# 'Horseback riding', 
# 'Mountain biking', 
# 'OVH/Off-road driving', 
# 'Paddle sports', 
# 'Road biking', 
# 'Rock climbing', 
# 'Scenic driving', 
# 'Snowshoeing', 
# 'Skiing', 
# 'Running', 
# 'Via ferrata', 
# 'Walking']


descriptions = ['Love this hike!!', 'This trail was so gorgeous!', 'Went with my dog and had a great time', 'Great for someone looking for adventure', 'Go off the path!', 'The weather was a bit overcast but this hike was still so beautiful. The views!!', 'I missed the warriors game to take a walk on this trail with my wife and while I would have rather watched the game, I was shocked by the beauty on display.', 'My favorite trail in the area', 'Breath of fresh air :)', 'Check out the off-trail path about halfway...you\'re in for a surprise!', 'Definitely recommend taking a stroll in the mornings when it\'s a little less muggy. It can get quite hot midday.', 'Excellent trail for mountain biking. I saw plenty of bikers', 'love this trail!!!!', 'Don\'t forget to bring sunscreen. Don\'t forget like I did...:(', 'If I could live on the top of the viewpoint in a little shack I would', 'Viewpoint is to die for', 'I went on a recommendation from a friend and man I do not regret it', 'A wise man once said, get a breath of fresh air', 'This hike is top 1', 'Unreal views.', 'That satisfying mometn when you finish this monster trail. Tough but rewarding!', 'Took my mom and dad on this trail (they\'re old) and they loved it. Not too bad on the knees', 'My legs hurt so good', 'I might take my bike back here', 'Saw some gorgeous wildlife', 'Do yourself a favor and block off your Saturday morning', 'Best time to go is before 9am. Otherwise, you might get a crowd', 'Beat the crowd and go early!', 'Sunset hike, woot woot!', 'Fresh air, long walks on the beach, and good vibes all day', 'Not easy, but not too hard', 'Really enjoyed this trail', 'I\'ll be back for sure', 'Highly recommend for bikers and/or runners']
activity = ['Hiking', 'Running']

year = [2019, 2018, 2020, 2021]
month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
day = (1..28).to_a

(1..10).each do |trail_id|
  (1..30).each do |user_id|
    if [5, 8, 25].include?(user_id)
      rating = [3]
    else
      rating = [4, 5]
    end
    Review.create!(user_id: user_id, trail_id: trail_id, photo_id: nil, activity: activity.sample, rating: rating.sample, description: descriptions.sample, date_hiked: "#{year.sample}-#{month.sample}-#{day.sample}")
  end
end

condition1 = Condition.create!(name: 'Great!')
condition2 = Condition.create!(name: 'Blowdown')
condition3 = Condition.create!(name: 'Bridge out')
condition4 = Condition.create!(name: 'Bugs')
condition5 = Condition.create!(name: 'Closed')
condition6 = Condition.create!(name: 'Fee')
condition7 = Condition.create!(name: 'Flooded')
condition8 = Condition.create!(name: 'Icy')
condition9 = Condition.create!(name: 'Muddy')
condition10 = Condition.create!(name: 'No shade')
condition12 = Condition.create!(name: 'Off trail')
condition13 = Condition.create!(name: 'Overgrown')
condition14 = Condition.create!(name: 'Private property')
condition15 = Condition.create!(name: 'Rocky')
condition16 = Condition.create!(name: 'Scramble')
condition17 = Condition.create!(name: 'Washed out')
condition18 = Condition.create!(name: 'Snow')

rand_conditions_1 = [1, 3, 4, 11, 12, 14]
rand_conditions_x = [1, 3]
rand_conditions_2 = [11, 12]
rand_conditions_3 = [4, 14]

nums = (1..300).to_a
nums.each do |num|
  num_conditions = [1, 2, 3].sample

  if num_conditions == 1
    rc_9 = ReviewCondition.create!(review_id: num, condition_id: rand_conditions_1.sample)
  elsif num_conditions == 2
    rc_9 = ReviewCondition.create!(review_id: num, condition_id: rand_conditions_x.sample)
    rc_9 = ReviewCondition.create!(review_id: num, condition_id: rand_conditions_2.sample)
  else
    rc_9 = ReviewCondition.create!(review_id: num, condition_id: rand_conditions_x.sample)
    rc_9 = ReviewCondition.create!(review_id: num, condition_id: rand_conditions_2.sample)
    rc_9 = ReviewCondition.create!(review_id: num, condition_id: rand_conditions_3.sample)
  end

end

dipsea.photos.attach(io: open('https://funtrails-seeds.s3.amazonaws.com/dipsea.jpeg'), filename: 'dipsea.jpeg')
stinson.photos.attach(io: open('https://funtrails-seeds.s3.amazonaws.com/stinson.jpg'), filename: 'stinson.jpg')
muir_woods.photos.attach(io: open('https://funtrails-seeds.s3.amazonaws.com/muirwoods.jpg'), filename: 'muirwoods.jpg')
ten_valley.photos.attach(io: open('https://funtrails-seeds.s3.amazonaws.com/tenn_beach.jpg'), filename: 'tenn_beach.jpg')
rodeo_beach.photos.attach(io: open('https://funtrails-seeds.s3.amazonaws.com/rodeo_beach.jpg'), filename: 'rodeo_beach.jpg')
mist_trail.photos.attach(io: open('https://funtrails-seeds.s3.amazonaws.com/mist_trail.jpg'), filename: 'mist_trail.jpg')
half_dome.photos.attach(io: open('https://funtrails-seeds.s3.amazonaws.com/half_dome.jpg'), filename: 'half_dome.jpg')
panum_crater.photos.attach(io: open('https://funtrails-seeds.s3.amazonaws.com/panum_crater.jpg'), filename: 'panum_crater.jpg')
angels_landing.photos.attach(io: open('https://funtrails-seeds.s3.amazonaws.com/angel.jpg'), filename: 'angel.jpg')
watchman_trail.photos.attach(io: open('https://funtrails-seeds.s3.amazonaws.com/watchman.jpg'), filename: 'watchman.jpg')
