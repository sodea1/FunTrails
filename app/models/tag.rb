class Tag < ApplicationRecord
    validates :description, presence: true

    has_many :trail_tags
end
