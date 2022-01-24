Rails.application.routes.draw do
  resources :rangers
  resources :mages
  resources :warriors
  resources :enemies
  resources :skills
  resources :weapons
  resources :champions
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
