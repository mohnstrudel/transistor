class Admin::ProjectsController < ApplicationController
	
	before_action	:find_project, only: [:show, :edit, :update]

	def new
		@project = Project.new
	end

	def index
		@projects = Project.all
	end

	def update
		@project.update!(project_params)
		redirect_to admin_path
	end
	
	def edit
	end

	def show
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
