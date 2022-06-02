class Trail < ApplicationRecord
    validates :park_id, :longitude, :latitude, :elevation_gain, :length, :difficulty_level, :route_type, :estimated_time, :description, :state, :country, presence: true
    validates :t_name, presence: true, uniqueness: true

    belongs_to :park,
        primary_key: :id,
        foreign_key: :park_id,
        class_name: :Park


    has_many :trail_tags

    has_many :tags,
        through: :trail_tags,
        source: :tag

    has_many :reviews

    has_many_attached :photos, dependent: :purge_later
end
