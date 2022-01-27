class Encounter < ApplicationRecord
  belongs_to :master
  belongs_to :user
  
end
