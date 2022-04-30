class AddNullConditionName < ActiveRecord::Migration[5.2]
  def change
    change_column_null :conditions, :name, false
  end
end
