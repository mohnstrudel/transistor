class CreatePowers < ActiveRecord::Migration
  def change
    create_table :powers do |t|
      t.integer :value

      t.timestamps null: false
    end
  end
end
