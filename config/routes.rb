Rails.application.routes.draw do
  resources :tasks, only: :index
  resources :events, only:  %i[index create]

  # devise_for :users,
  #            path: '',
  #            path_name: {
  #              sing_in: 'login',
  #              sing_out: 'logout',
  #              registration: 'signup'
  # },
  #            controllers: {
  #   sessions: 'users/sessions',
  #   registrations: 'users/registrations'
  # }

  devise_for :users,
             controllers: {
               sessions: 'users/sessions',
               registrations: 'users/registrations'
             }


  root "home#index"
  get '*path', to: 'home#index', via: :all
end
# https://github.com/lynndylanhurley/devise_token_auth
# https://devise-token-auth.gitbook.io/devise-token-auth/usage
# https://github.com/DakotaLMartinez/rails-react-devise-tutorial