class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.integer :user_id, null: false
      t.string :url, null: false
      t.text :description
      t.timestamps
    end
    add_index :pins, :user_id
  end
end
