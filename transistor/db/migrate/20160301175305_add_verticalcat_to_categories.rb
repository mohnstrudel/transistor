class AddVerticalcatToCategories < ActiveRecord::Migration
  def change
    add_column :categories, :vertical_image, :string
  end
end
