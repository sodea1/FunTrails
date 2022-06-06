class ChangeName < ActiveRecord::Migration[5.2]
  def change
    rename_column :trails, :name, :name
    rename_column :parks, :p_name, :name
  end
end
