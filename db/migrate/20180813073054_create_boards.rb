class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :description
      t.timestamps
    end
    add_index :boards, :user_id
  end
end
