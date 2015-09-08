class Admin::DashboardController < ApplicationController
  def index
	@projects = Project.all
	@services = Service.all
  end
end
