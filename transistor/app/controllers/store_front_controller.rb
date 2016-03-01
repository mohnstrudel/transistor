class StoreFrontController < ApplicationController
	def index
		@categories = Category.all.limit(3)
		@latest_products = Product.last(10)

		@hotproducts = Product.hot
	end
end
