class AddIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :trails, :park_id
  end
end
