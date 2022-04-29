class TrailTag < ApplicationRecord
    validates :trail_id, :tag_id, presence: true

    belongs_to :trail,
        foreign_key: :trail_id,
        class_name: :Trail

    belongs_to :tag,
        foreign_key: :tag_id,
        class_name: :Tag
end
