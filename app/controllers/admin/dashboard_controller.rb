class Admin::DashboardController < ApplicationController
  def index
	@projects = Project.all
  end
end
