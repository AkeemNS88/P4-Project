class User < ApplicationRecord
    has_secure_password
    
    has_many :encounters
    has_many :masters, through: :encounters

    validates :username, presence: true, uniqueness: true
end
