class Admin::DashboardController < ApplicationController
  def index	
	@products = Product.last(5)
	@categories = Category.last(5)
	@powers = Power.last(5)
  end
end
