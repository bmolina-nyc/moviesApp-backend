class Episode < ApplicationRecord
    has_many :users_episodes
    has_many :episodes, through: users_episodes
    belongs_to :show
end
