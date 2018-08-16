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
  validate :ensure_photo
  
  has_one_attached :photo

  belongs_to :user
  has_many :pinnings, dependent: :destroy
  has_many :boards,
    through: :pinnings,
    source: :pin

  def ensure_photo
    errors[:photo] << "must be attached" unless self.photo.attached?
  end
end
