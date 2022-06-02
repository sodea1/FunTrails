@parks.each do |park|
    
    json.set! park.id do 
        json.extract! park, :id, :p_name, :longitude, :latitude, :acreage, :contact, :description, :country, :state
        count = park.reviews.length
        json.totalReviews count
    end
end
