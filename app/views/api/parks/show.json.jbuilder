json.extract! @park, :id, :name, :longitude, :latitude, :acreage, :contact, :description, :country, :state
count = @park.reviews.length
json.totalReviews count