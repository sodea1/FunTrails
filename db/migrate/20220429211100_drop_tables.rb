class DropTables < ActiveRecord::Migration[5.2]
  def change
    drop_table :activities, force: :cascade
  end
end
