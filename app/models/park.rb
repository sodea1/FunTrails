class Park < ApplicationRecord
    validates :p_name, presence: true, uniqueness: true
    validates :longitude, :latitude, :description, :country, presence: true

    has_many :trails,
        primary_key: :id,
        foreign_key: :park_id,
        class_name: :Park

    has_many_attached :photos, dependent: :purge_later

    def self.total_reviews(parkId)
        count = 0
        trails = Trail.where(`park_id = #{parkId}`)
        trails.each do |trail|
            count += trail.reviews.length
        end
        return count
    end
end
