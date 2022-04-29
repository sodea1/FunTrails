class Review < ApplicationRecord
    validates :user_id, presence: true, uniqueness: { scope: :trail_id }
    validates :photo_id, presence: true, uniqueness: { scope: :trail_id }
    validates :trail_id, :rating, :date_hiked, presence: true
    validates :rating, inclusion: { in: 1..5 }
    validates :activity_id, presence: true

    belongs_to :user
    has_many :activies
    belongs_to :trail

    # has_one :activity
    has_many :review_details

    has_many :conditions,
        through: :review_details,
        source: :condition
end
