class ChangePhotoNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :reviews, :photo_id, true
  end
end
