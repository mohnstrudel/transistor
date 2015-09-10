class CreateParticipations < ActiveRecord::Migration
  def change
    create_table :participations do |t|
    	t.belongs_to :project, index: true
    	t.belongs_to :teammember, index: true

      t.timestamps null: false
    end
  end
end
