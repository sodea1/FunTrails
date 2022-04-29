class Tag < ApplicationRecord
    validates :description, presence: true

    has_many :trail_tags
        # foreign_key: :tag_id,
        # class_name: :TrailTag

    has_many :trails,
        through: :trail_tags,
        source: :trail
end
