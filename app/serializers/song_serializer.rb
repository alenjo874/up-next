class SongSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :party
end
