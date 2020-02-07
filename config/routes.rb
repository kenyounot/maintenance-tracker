Rails.application.routes.draw do
  
  
  namespace :api do
    namespace :v1 do
          resources :users, only: [:create]
          resources :vehicles, only: [:index]
          post 'authenticate', to: 'users#authenticate'
    end
  end
  
end
