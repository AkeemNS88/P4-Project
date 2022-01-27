class User < ApplicationRecord
    has_secure_password
    
    has_many :masters

    validates: username, presence: true, uniqueness: true
end
