class Project < ActiveRecord::Base
	has_many :participations
	has_many :teammembers, through: :participations

	has_many :projectphotos

	accepts_nested_attributes_for	:projectphotos
end
