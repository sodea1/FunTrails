class Tag < ApplicationRecord
    validates :description, presence: true

    has_many :trail_tags

    has_many :trails,
        through: :trail_tags,
        source: :trail
end
