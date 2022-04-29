class Activity < ApplicationRecord
    validates :name, presence: true

    # belongs_to :review, optional: true
    belongs_to :review, optional: true
end
