class Vehicle < ApplicationRecord
  belongs_to :user
  has_many :maintenances
end
