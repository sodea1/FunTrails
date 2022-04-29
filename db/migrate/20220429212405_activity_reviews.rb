class ActivityReviews < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :activity_id
    add_column :reviews, :activity, :string, null: false
    add_column :reviews, :conditions, :string, array: true, default: []
  end
end
