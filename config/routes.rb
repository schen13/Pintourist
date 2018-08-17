Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :boards, except: [:new, :edit]
    resources :pins, except: [:new, :edit]
    resources :pinnings, only: [:index, :create, :destroy]
  end

  root 'static_pages#root'
end
