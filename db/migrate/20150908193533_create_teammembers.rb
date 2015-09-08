class CreateTeammembers < ActiveRecord::Migration
  def change
    create_table :teammembers do |t|
      t.string :name
      t.string :position
      t.date :workstart

      t.timestamps null: false
    end
  end
end
