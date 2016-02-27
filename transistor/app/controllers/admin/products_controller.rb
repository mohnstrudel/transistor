class Admin::ProductsController < ApplicationController
  before_action :find_product, only: [:edit, :update]

  def index
  	@products = Product.all
  end

  def show
  end

  def edit
  end

  def new
  	@product = Product.new
  end

  def update
  	if @product.update(product_params)
  		render 'edit'
  	else
  		render 'edit'
  	end
  end

  def create
  	@product = Product.new(product_params)

  	if @product.save
  		redirect_to admin_products_path
  	else
  		render 'new'
  	end
  end

  private

  def find_product
  	@product = Product.find(params[:id])
  end

  def product_params
  	params.require(:product).permit(:name, :description, :intro_text, :sku)
  end
end
