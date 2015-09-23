class Admin::DashboardController < AdminController
	
  def index
	@projects = Project.all
	@services = Service.all
	@teammembers = Teammember.all

	@recentProjects = Project.where('created_at >= ?', 1.week.ago).count
	@recentServices = Service.where('created_at >= ?', 1.week.ago).count
	@recentTeammembers = Teammember.where('created_at >= ?', 1.week.ago).count
  end
end
