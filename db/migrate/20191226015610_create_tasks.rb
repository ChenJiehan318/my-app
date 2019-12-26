class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :name, null:false
      t.text :description
      t.date :deadline
      t.boolean :status, default: true
      t.timestamps
    end
  end
end
