Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :boards, except: [:new, :edit]
    resources :pins, except: [:new, :edit]
    resources :pinnings, only: [:index, :create, :destroy]
    resources :searches, only: [:index]
  end

  root 'static_pages#root'
end
