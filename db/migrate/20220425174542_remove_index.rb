class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :trails, :park_id
  end
end
