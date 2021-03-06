Rails.application.routes.draw do
  resources :members
  resources :groups
  
  resources :posts do 
    resources :comments
  end
  resources :users do 
    resources :posts
    resources :schedules
  end

  resources :schedules

  get "/user/:user_id/posts", to: "posts#get_user_posts"
  get "/user/:user_id/schedule", to: "schedule#get_user_schedule"

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
end
