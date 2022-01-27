class CreateEncounters < ActiveRecord::Migration[7.0]
  def change
    create_table :encounters do |t|
      t.string :name
      t.integer :encounter_number
      t.integer :master_id
      t.integer :user_id
      
      t.timestamps
    end
  end
end
