json.extract! @review, :id, :user_id, :trail_id, :rating, :description, :date_hiked, :activity
json.user @review.user, :first_name, :last_name
json.conditions @review.conditions, :name