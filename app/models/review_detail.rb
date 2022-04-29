class ReviewDetail < ApplicationRecord
    validates :review_id, presence: true
    validates :review_id, uniqueness: { scope: :condition_id }

    belongs_to :review
    belongs_to :condition
end