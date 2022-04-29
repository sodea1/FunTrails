class ReviewDetail < ApplicationRecord
    validates :review_id, :activity_id, presence: true
    validates :review_id, uniqueness: { scope: :condition_id }
    validates :review_id, uniqueness: { scope: :activity_id }

    belongs_to :review
    has_one :activities
    has_many :conditions
end