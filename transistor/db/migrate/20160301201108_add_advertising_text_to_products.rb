class AddAdvertisingTextToProducts < ActiveRecord::Migration
  def change
    add_column :products, :advertising_main_slider, :string
  end
end
