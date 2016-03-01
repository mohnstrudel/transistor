class AddHotPicToProducts < ActiveRecord::Migration
  def change
    add_column :products, :main_slider_image, :string
  end
end
