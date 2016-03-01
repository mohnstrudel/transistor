class Category < ActiveRecord::Base
	has_many :products

	mount_uploader :vertical_image, CategorypicUploader
end
