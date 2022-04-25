class AddTrailColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :trails, :elevation_gain, :string
    add_column :trails, :length, :string
  end
end
