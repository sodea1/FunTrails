class Condition < ApplicationRecord
    validates :name, presence: true

    belongs_to :review_detail, optional: true
end
