Rails.application.routes.draw do
  
  resources :posts do 
    resources :comments
  end
  resources :users do 
    resources :schedules
  end

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
end
