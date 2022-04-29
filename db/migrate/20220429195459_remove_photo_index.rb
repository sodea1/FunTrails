class RemovePhotoIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, [:photo_id, :trail_id]
  end
end
