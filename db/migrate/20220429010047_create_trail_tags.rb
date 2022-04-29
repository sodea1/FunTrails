class CreateTrailTags < ActiveRecord::Migration[5.2]
  def change
    create_table :trail_tags do |t|
      t.integer :tag_id, null: false
      t.integer :trail_id, null: false

      t.timestamps
    end
  end
end
