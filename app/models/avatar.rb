class Avatar < ActiveRecord::Base
  belongs_to :teammember

  mount_uploader :avatar, AvatarUploader
end
