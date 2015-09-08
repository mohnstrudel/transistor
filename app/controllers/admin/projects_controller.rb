class Admin::ProjectsController < ApplicationController
	def new
		@project = Project.new
	end

	def index
		@projects = Project.all
	end

	def create
		@project = Project.new(project_params)
		if @project.save
			redirect_to root_path
		else
			render 'new'
		end
	end

	private

	def find_project
		@project = Project.find(params[:id])
	end

	def project_params
		params.require(:project).permit(:title, :description)
	end
end
