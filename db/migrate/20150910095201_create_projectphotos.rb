class CreateProjectphotos < ActiveRecord::Migration
  def change
    create_table :projectphotos do |t|
      t.string :image
      t.references :project, index: true

      t.timestamps null: false
    end
    add_foreign_key :projectphotos, :projects
  end
end
