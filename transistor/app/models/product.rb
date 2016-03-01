class Product < ActiveRecord::Base

	scope :hot, lambda{ where(hotproduct: true) }

	mount_uploader :main_slider_image, CategorypicUploader

	belongs_to :category
	
	has_many :options, dependent: :destroy
	accepts_nested_attributes_for :options, allow_destroy: true

	has_many :images
	accepts_nested_attributes_for :images, allow_destroy: true

end
