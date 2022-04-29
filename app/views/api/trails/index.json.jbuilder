@trails.each do |trail|
    # set key to trail's id
    json.set! trail.id do
        # display inner POJO with all info
        json.extract! trail, :id, :t_name, :longitude, :latitude, :difficulty_level, :route_type, :estimated_time, :description, :state, :park_id, :country, :elevation_gain, :length
        json.tags trail.tags, :description
    end
end