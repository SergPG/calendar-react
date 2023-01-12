class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description
      t.datetime :start_at
      t.boolean :all_day, default: false
      t.integer :status, default: 0

      t.timestamps
    end
  end
end
