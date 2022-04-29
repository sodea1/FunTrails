class Trail < ApplicationRecord
    validates :park_id, :longitude, :latitude, :elevation_gain, :length, :difficulty_level, :route_type, :estimated_time, :description, :state, :country, presence: true
    validates :t_name, presence: true, uniqueness: true

    
    has_many :trail_tags

    has_many :tags,
        through: :trail_tags,
        source: :tag

    has_many :reviews
end
