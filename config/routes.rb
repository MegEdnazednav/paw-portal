Rails.application.routes.draw do
  root to: "animals#index"

  resources :animals, except: :index
end
