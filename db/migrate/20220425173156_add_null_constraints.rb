class AddNullConstraints < ActiveRecord::Migration[5.2]
  def change
    change_column_null :trails, :elevation_gain, false
    change_column_null :trails, :length, false
  end
end
