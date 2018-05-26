Rails.application.routes.draw do
  resources :movies
  resources :users_episodes
  resources :users_shows
  resources :episodes
  resources :shows

  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/register', to: 'users#create'
  post '/login', to: 'auth#create'
  get '/users/me', to: 'users#me'
  get '/welcome', to: 'application#welcome'
end
