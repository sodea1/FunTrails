class RemoveColTrail < ActiveRecord::Migration[5.2]
  def change
    remove_column :trails, :city
    add_column :trails, :country, :string, null: false
  end
end
