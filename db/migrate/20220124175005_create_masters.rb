class CreateMasters < ActiveRecord::Migration[7.0]
  def change
    create_table :masters do |t|
      t.string :name
      t.integer :health
      t.integer :wealth
      t.integer :energy
      t.belongs_to :user, polymorphic: true
      

      t.timestamps
    end
  end
end
