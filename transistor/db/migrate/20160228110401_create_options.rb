class CreateOptions < ActiveRecord::Migration
  def change
    create_table :options do |t|
      t.float :price
      t.float :power
      t.references :product, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
