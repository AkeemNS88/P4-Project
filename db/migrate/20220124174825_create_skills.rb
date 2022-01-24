class CreateSkills < ActiveRecord::Migration[7.0]
  def change
    create_table :skills do |t|
      t.string :warrior_skill_one
      t.string :warrior_skill_two
      t.string :mage_skill_one
      t.string :mage_skill_two
      t.string :ranger_skill_one
      t.string :ranger_skill_two
      t.string :enemy_skill_one
      t.string :enemy_skill_two
      t.string :enemy_skill_three
      t.string :enemy_skill_four
      t.timestamps
    end
  end
end
