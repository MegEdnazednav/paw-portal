class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :kind, :description
end
