class Admin::ProjectsController < AdminController
	layout "admin"
	
	before_action	:find_project, only: [:show, :edit, :update, :destroy]

	def new
		@project = Project.new
	end

	def index
		@projects = Project.all
	end

	def update
		@project.update!(project_params)
		redirect_to admin_projects_path
	end
	
	def edit
	end

	def show
	end

	def create
		@project = Project.new(project_params)
		if @project.save
			redirect_to admin_projects_path
			flash[:success] = 'Вы успешно создали проект'
		else
			render 'new'
		end
	end

	def destroy
		if @project.destroy
			redirect_to admin_projects_path
			flash[:info] = 'Вы успешно удалили проект'
		end
	end

	private

	def find_project
		@project = Project.find(params[:id])
	end

	def project_params
		params.require(:project).permit(:title, :description, { teammember_ids: [] },
		projectphotos_attributes: [:image, :project_id] )
	end
end
