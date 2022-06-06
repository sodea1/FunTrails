class CreateTrails < ActiveRecord::Migration[5.2]
  def change
    create_table :trails do |t|
      t.string :name, null: false
      t.float :longitude, null: false
      t.float :latitude, null: false
      t.integer :length, null: false
      t.string :difficulty_level, null: false
      t.integer :elevation_gain, null: false
      t.string :route_type, null: false
      t.string :estimated_time, null: false
      t.text :description, null: false
      t.string :state, null: false
      t.string :city, null: false
      t.integer :park_id, null: false

      t.timestamps
    end
    add_index :trails, :name, unique: true
    add_index :trails, :park_id, unique: true
  end
end
