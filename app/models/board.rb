# == Schema Information
#
# Table name: boards
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Board < ApplicationRecord

  include PgSearch
  multisearchable :against => :title
  pg_search_scope :whose_title_starts_with, against: :title, using: {tsearch: {prefix: true} }

  validates :user_id, :title, presence: true
  
  belongs_to :user
  has_many :pinnings, dependent: :destroy
  has_many :pins,
    through: :pinnings,
    source: :pin
end
