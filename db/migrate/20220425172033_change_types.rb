class ChangeTypes < ActiveRecord::Migration[5.2]
  def change
    remove_column :trails, :elevation_gain
    remove_column :trails, :length
  end
end
