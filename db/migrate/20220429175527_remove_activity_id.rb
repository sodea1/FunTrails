class RemoveActivityId < ActiveRecord::Migration[5.2]
  def change
    remove_column :review_details, :activity_id
  end
end
