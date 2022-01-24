class Skill < ApplicationRecord
  belongs_to :enemy
  belongs_to :mage
  belongs_to :ranger
  belongs_to :warrior
end
