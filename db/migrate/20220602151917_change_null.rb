class ChangeNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :parks, :acreage, true
    change_column_null :parks, :contact, true
  end
end
