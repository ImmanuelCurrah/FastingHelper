class Member < ApplicationRecord
  belongs_to :group
  has_many :users
end
