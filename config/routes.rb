Rails.application.routes.draw do

  root to: 'animals#index'

  get 'animals/:id', to: 'animals#index'

  resources :animals, except: :index

  namespace :api do
    namespace :v1 do
      resources :animals do
        member do
        end
        collection do
        end
      end
    end
  end
end
