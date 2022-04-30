class RemoveConditions < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :conditions
  end
end
