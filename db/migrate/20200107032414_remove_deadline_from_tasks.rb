class RemoveDeadlineFromTasks < ActiveRecord::Migration[6.0]
  def change

    remove_column :tasks, :deadline, :date
  end
end
