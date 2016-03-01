class CreateCategorypics < ActiveRecord::Migration
  def change
    create_table :categorypics do |t|
      t.string :image
      t.references :category, index: true, foreign_key: true
      t.references :subcategory, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
