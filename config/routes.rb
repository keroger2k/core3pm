Core3pm::Application.routes.draw do
  ActiveAdmin.routes(self)

  devise_for :admin_users, ActiveAdmin::Devise.config

  get "users/index"
  devise_for :users
  root :to => 'users#index'
end
