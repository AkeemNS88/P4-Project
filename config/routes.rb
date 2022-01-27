Rails.application.routes.draw do
  resources :users, only: [:index, :create, :destroy] 
  resources :masters, only: [:index, :show, :update]
  resources :encounters, only: [:show, :update]

  get '/me', to: "users#show"

  post '/login', to: "sessions#create"
  
  delete '/logout', to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

end
