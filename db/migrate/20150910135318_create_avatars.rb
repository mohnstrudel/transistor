class CreateAvatars < ActiveRecord::Migration
  def change
    create_table :avatars do |t|
      t.string :avatar
      t.references :teammember, index: true

      t.timestamps null: false
    end
    add_foreign_key :avatars, :teammembers
  end
end
