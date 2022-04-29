class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :trail_id, null: false
      t.integer :photo_id, null: false
      t.integer :rating, null: false
      t.text :description
      t.date :date_hiked, null: false

      t.timestamps
    end

    add_index :reviews, :user_id
    add_index :reviews, :trail_id
    add_index :reviews, [:user_id, :trail_id], unique: true
    add_index :reviews, [:photo_id, :trail_id], unique: true
    add_index :reviews, :photo_id
  end
end
