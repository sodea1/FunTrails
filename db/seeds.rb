# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Trail.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

# sample user DON'T FORGET ID OTHERWISE 'undefined' keys under entities > users
demo = User.create(first_name: 'Steph', last_name: 'Curry', email: 'chefcurry@demo.com', password: 'godubs', bio: 'I am the demo user!')

dipsea = Trail.create!(t_name: 'Dipsea Trail, Steep Ravine Trail, and Matt Davis Loop', longitude: -122.63602, latitude: 37.89665, length: 7.5, difficulty_level: 'moderate', elevation_gain: 1689, route_type: 'Loop', estimated_time: 'Est. 3h 40m', description: 'Discover this 7.5-mile loop trail near Mill Valley, California. Generally considered a moderately challenging route, it takes an average of 3 h 40 min to complete. This is a very popular area for hiking and trail running, so you\'ll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime.', state: 'California', country: 'United States of America', park_id: 1)




