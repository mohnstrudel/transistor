class CreateServicepics < ActiveRecord::Migration
  def change
    create_table :servicepics do |t|
      t.string :servicepic
      t.references :service, index: true

      t.timestamps null: false
    end
    add_foreign_key :servicepics, :services
  end
end
