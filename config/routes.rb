Rails.application.routes.draw do
  resources :users, only: [:create] 
  resources :masters, only: [:index, :show, :update]
  resources :skills, only: [:index, :show, :update]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

end
