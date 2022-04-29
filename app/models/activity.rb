class Activity < ApplicationRecord
    validates :name, presence: true

    belongs_to :review_detail, optional: true
end
