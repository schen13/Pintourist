class AddColumnsToPinnings < ActiveRecord::Migration[5.2]
  def change
    add_column :pinnings, :board_id, :integer, null: false
    add_column :pinnings, :pin_id, :integer, null: false
    add_index :pinnings, [:board_id, :pin_id], unique: true
  end
end
