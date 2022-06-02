class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :p_name, null: false
      t.float :longitude, null: false
      t.float :latitude, null: false
      t.integer :acreage, null: false
      t.string :contact, null: false
      t.text :description, null: false
      t.string :country, null: false
      t.string :state, null: false

      t.timestamps
    end
    add_index :parks, :p_name, unique: true
  end
end
