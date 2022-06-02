@trails.each do |trail|
    # set key to trail's id
    json.set! trail.id do
        # display inner POJO with all info
        json.extract! trail, :id, :t_name, :longitude, :latitude, :difficulty_level, :route_type, :estimated_time, :description, :state, :park_id, :country, :elevation_gain, :length
        # nest tag descriptions under trail
        json.tags trail.tags, :description
        
        sum = 0
        trail.reviews.each do |review|
            sum += review.rating
        end

        if trail.photos.attached?
            trail.photos.map { |photo| json.photoUrl url_for(photo) }
            # json.photoUrl url_for(trail.photos)
        end

        totalReviews = trail.reviews.length
        avgFloat = sum.to_f / trail.reviews.length
        avgRating = avgFloat.round(1)
        json.rating avgRating
        json.reviews totalReviews
        json.parkName trail.park.p_name
    end
end

