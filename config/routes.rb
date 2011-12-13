Core3pm::Application.routes.draw do
  devise_for :admins

  devise_for :users
  root :to => 'users#index'
end
