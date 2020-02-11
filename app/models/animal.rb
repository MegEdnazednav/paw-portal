class Animal < ApplicationRecord
  include Filterable

  has_one_attached :primary_image

  scope :filter_by_gender,  -> (gender)  { where gender: gender }
  scope :filter_by_outside, -> (outside) { where outside: outside }
  scope :filter_by_height,  -> (height)  { where height: height }
end
