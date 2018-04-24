class User < ApplicationRecord
    has_secure_password
    # has_many :books
    has_many :users_shows
    has_many :shows, through: :users_shows
    has_many :users_episodes
    has_many :episodes, through: :users_episodes
   
end
