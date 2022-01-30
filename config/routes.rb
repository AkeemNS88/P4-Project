Rails.application.routes.draw do
  resources :users, only: [:index, :update, :show, :create, :destroy] 
  resources :encounters, only: [:index, :show, :create, :update]

  get '/me', to: "users#show"

  patch '/patch', to:"users#update"

  post '/login', to: "sessions#create"
  
  delete '/logout', to: "sessions#destroy"
 
  delete '/delete', to: "users#destroy"

end
