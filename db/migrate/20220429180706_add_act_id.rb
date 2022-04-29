class AddActId < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :activity_id, :integer, null: false
    add_index :reviews, :activity_id
  end
end
