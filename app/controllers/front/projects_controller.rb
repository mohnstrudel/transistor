class Front::ProjectsController < ApplicationController
  def index
  	@projects = Project.all
  end
end
