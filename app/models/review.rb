class Review < ApplicationRecord
    validates :user_id, presence: true, uniqueness: { scope: :trail_id }
    validates :trail_id, :rating, :date_hiked, presence: true
    validates :rating, inclusion: { in: 1..5 }
    validates :activity, presence: true

    belongs_to :user
    belongs_to :trail
end


