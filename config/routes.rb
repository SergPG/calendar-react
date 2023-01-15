Rails.application.routes.draw do
  resources :tasks, only: :index
  resources :events, only: :index

  root "home#index"
  get '*path', to: 'home#index', via: :all
end
