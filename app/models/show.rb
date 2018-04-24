class Show < ApplicationRecord
  has_many :user_shows
  has_many :users, through: :user_shows
  has_many :episodes
end
