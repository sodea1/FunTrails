json.array! @trails do |trail|
    json.extract! trail, :t_name, :longitude, :latitude, :difficulty_level, :route_type, :estimated_time, :description, :state, :park_id, :country, :elevation_gain, :length
end