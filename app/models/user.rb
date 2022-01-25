class User < ApplicationRecord
    has_many :masters
    
    has_secure_password
end
