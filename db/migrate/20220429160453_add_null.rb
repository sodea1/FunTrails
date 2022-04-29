class AddNull < ActiveRecord::Migration[5.2]
  def change
    add_column :review_details, :condition_id, :integer, null: false
    add_index :review_details, [:condition_id, :review_id], unique: true
  end
end
