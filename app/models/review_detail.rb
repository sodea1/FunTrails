class ReviewDetail < ApplicationRecord
    validates :review_id, presence: true
    validates :review_id, uniqueness: { scope: :condition_id }

    belongs_to :review
    has_many :conditions
end