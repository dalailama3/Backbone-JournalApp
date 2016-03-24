Rails.application.routes.draw do
  root to: 'root_controller#root'

  namespace :api, defaults: { format: :json } do

    resources :posts, only: [:create, :show, :index, :update, :destroy]
  end

end
