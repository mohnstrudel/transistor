class Servicepic < ActiveRecord::Base
  belongs_to :service
  mount_uploader :servicepic, ServicepicUploader
end
