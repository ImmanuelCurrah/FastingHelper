class User < ApplicationRecord
  has_one :schedule
  has_many :posts
  has_many :comments
end
