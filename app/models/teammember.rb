class Teammember < ActiveRecord::Base
	has_many :participations
	has_many :projects, through: :participations
	has_many :avatars

	accepts_nested_attributes_for :avatars
end
