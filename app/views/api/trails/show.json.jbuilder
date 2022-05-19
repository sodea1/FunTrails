json.extract! @trail, :id, :t_name, :longitude, :latitude, :difficulty_level, :route_type, :estimated_time, :description, :state, :park_id, :country, :elevation_gain, :length
json.tags @trail.tags, :description


sum = 0
@trail.reviews.each do |review|
    sum += review.rating
end

avgRating = sum / @trail.reviews.length
debugger
json.rating avgRating