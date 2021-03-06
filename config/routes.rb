Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :trails, only: [:index]
    
    resources :trails, only: [:show] do
      resources :reviews, only: [:create, :destroy, :update, :index, :show]
    end
    resources :parks, only: [:show, :index]

    resources :review_conditions, only: [:create, :update]
  end
end
