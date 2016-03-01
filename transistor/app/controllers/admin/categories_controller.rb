class Admin::CategoriesController < ApplicationController
  
  before_action :find_category, only: [:edit, :show, :update]

  def index
    @categories = Category.all
  end

  def show
  end

  def edit
  end

  def new
    @category = Category.new
  end

  def update
    if @category.update(category_params)
      redirect_to admin_categories_path
    else
      render 'edit'
    end
  end

  def create
    @category = Category.new(category_params)

    if @category.save
      redirect_to admin_categories_path
    else
      render 'new'
    end
  end

  private

  def category_params
    params.require(:category).permit(:name, :vertical_image, :remove_vertical_image, :description)
  end

  def find_category
    @category = Category.find(params[:id])
  end
end
