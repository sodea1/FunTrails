class Trail < ApplicationRecord
    validates :longitude, :latitude, :length, :difficulty_level, :elevation_gain, :route_type, :estimated_time, :description, :state, :country, presence: true
    validates :t_name, :park_id, presence: true, uniqueness: true

    def show
        
    end
end
