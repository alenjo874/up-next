class PartySession < ApplicationRecord
  belongs_to :user
  belongs_to :party
end
