# == Schema Information
#
# Table name: pins
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  url         :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Pin < ApplicationRecord
  validates :user_id, :url, presence: true
  validates :url, url: true
  
  belongs_to :user
  has_many :pinnings
  has_many :boards,
    through: :pinnings,
    source: :pin
end
