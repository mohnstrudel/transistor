class Admin::ProductsController < ApplicationController
  before_action :find_product, only: [:edit, :update, :destroy]

  def index
  	@products = Product.all
  end

  def show
  end

  def edit
  end

  def new
  	@product = Product.new
    @product.options.build
  end

  def update
  	if @product.update(product_params)
      if params[:images]
        params[:images].each { |image| @product.images.create(image: image) }
      end
  		render 'edit'
  	else
  		render 'edit'
  	end
  end

  def create
  	@product = Product.new(product_params)

  	if @product.save
      if params[:images]
        params[:images].each { |image| @product.images.create(image: image) }
      end
  		redirect_to admin_products_path
  	else
  		render 'new'
  	end
  end

  def destroy
    if @product.destroy
      redirect_to admin_products_path
      flash[:info] = 'Удалено успешно'
    end
  end

  private

  def find_product
  	@product = Product.find(params[:id])
  end

  def product_params
  	params.require(:product).permit(:name, :description, :intro_text, :sku, :category_id,
      :voltage, :electric_current, :main_slider_image, :advertising_main_slider, :hotproduct,
      options_attributes: [:id, :power, :price, :product_id, :_destroy],
      images_attributes: [ :id, :image, :product_id, :_destroy ])
  end
end
