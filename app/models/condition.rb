class Condition < ApplicationRecord
    validates :name, presence: true

    has_many :review_details
end
