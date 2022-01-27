class Master < ApplicationRecord
    has_many :encounters
    belongs_to :user

end
