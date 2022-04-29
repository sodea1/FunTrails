class Review < ApplicationRecord
    validates :user_id, presence: true, uniqueness: { scope: :trail_id }
    validates :photo_id, presence: true, uniqueness: { scope: :trail_id }
    validates :trail_id, :rating, :date_hiked, presence: true
    validates :rating, inclusion: { in: 1..5 }

    belongs_to :user

    belongs_to :trail

    # has_many :activities,
        # through: :

    # has_many :conditions,
        # through: :
end
