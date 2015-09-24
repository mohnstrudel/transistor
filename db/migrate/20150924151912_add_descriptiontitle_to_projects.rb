class AddDescriptiontitleToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :desctitle, :string
  end
end
