class Condition < ApplicationRecord
    validates :name, presence: true

    has_many :review_details, optional: true
end
