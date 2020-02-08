Rails.application.routes.draw do
  
  
  namespace :api do
    namespace :v1 do
          resources :users, only: [:create]
          resources :vehicles, only: [:index, :create]
          post 'authenticate', to: 'users#authenticate'
          get 'vehicles/:id', to: 'vehicles#user_vehicles'
          get 'profile', to: 'users#profile'
    end
  end
end
