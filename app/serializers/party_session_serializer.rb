class PartySessionSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :party
end
