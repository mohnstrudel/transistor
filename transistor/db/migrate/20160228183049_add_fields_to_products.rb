class AddFieldsToProducts < ActiveRecord::Migration
  def change
    add_column :products, :voltage, :float
    add_column :products, :electric_current, :float
  end
end
