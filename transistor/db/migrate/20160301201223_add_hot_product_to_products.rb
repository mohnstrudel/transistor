class AddHotProductToProducts < ActiveRecord::Migration
  def change
    add_column :products, :hotproduct, :boolean
  end
end
