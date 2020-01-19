class AnimalSerializer < ActiveModel::Serializer

  include Rails.application.routes.url_helpers

  attributes :id, :name, :age, :kind, :description, :primary_image_url

  def primary_image_url
    return unless object.primary_image.attached?

    rails_blob_path(object.primary_image, only_path: true)
  end
end
