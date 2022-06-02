class Park < ApplicationRecord
    validates :p_name, presence: true, uniqueness: true
    validates :longitude, :latitude, :description, :country, presence: true

    has_many :trails,
        primary_key: :id,
        foreign_key: :park_id,
        class_name: :Park

    has_many :reviews,
        through: :trails,
        source: :reviews

    has_many_attached :photos, dependent: :purge_later
end
