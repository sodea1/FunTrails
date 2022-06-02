json.extract! @park, :id, :p_name, :longitude, :latitude, :acreage, :contact, :description, :country, :state

total_reviews = @park.reviews.length
json.reviews_total @park.reviews, total_reviews