
# json.extract! @reviews, :id, :user_id, :trail_id, :rating, :description, :date_hiked, :activity

@reviews.each do |review|
    # set key to review's id
    json.set! review.id do
        # display inner POJO with all info
        json.extract! review, :id, :user_id, :trail_id, :rating, :description, :date_hiked, :activity
        # nest tag descriptions under review
        json.conditions review.conditions, :name
    end
end