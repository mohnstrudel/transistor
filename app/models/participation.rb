class Participation < ActiveRecord::Base
	belongs_to :project
	belongs_to :teammember
end
