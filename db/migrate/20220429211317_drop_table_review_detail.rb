class DropTableReviewDetail < ActiveRecord::Migration[5.2]
  def change
    drop_table :review_details
    # drop_table :conditions
  end
end
