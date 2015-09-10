class Service < ActiveRecord::Base
	has_many :servicepics
	accepts_nested_attributes_for :servicepics

end
