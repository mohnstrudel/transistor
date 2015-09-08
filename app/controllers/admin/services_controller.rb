class Admin::ServicesController < ApplicationController
	before_action :find_service, only: [:edit, :update]

	def new
		@service = Service.new
	end

	def create
		@service = Service.new(service_params)
		if @service.save
			redirect_to admin_path
		else
			render 'new'
		end
	end

	def edit
	end

	def update
		@service.update(service_params)
		redirect_to admin_path
	end

	private

	def find_service
		@service = Service.find(params[:id])
	end

	def service_params
		params.require(:service).permit(:title, :description)
	end
end
