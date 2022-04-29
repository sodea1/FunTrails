class AdddoubleIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :trail_tags, [:trail_id, :tag_id], unique: true
  end
end
