class CreateReviewDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :review_details do |t|
      t.integer :review_id, null: false
      t.integer :activity_id, null: false
      t.integer :condition_id, null: false

      t.timestamps
    end

    add_index :review_details, [:review_id, :activity_id], unique: true
    add_index :review_details, [:review_id, :condition_id], unique: true
  end
end
