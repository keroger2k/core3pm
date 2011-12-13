Core3pm::Application.routes.draw do
  get "users/index"

  devise_for :admins
  devise_for :users
  root :to => 'users#index'
end
