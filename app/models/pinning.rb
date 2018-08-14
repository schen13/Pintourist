# == Schema Information
#
# Table name: pinnings
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  board_id   :integer          not null
#  pin_id     :integer          not null
#

class Pinning < ApplicationRecord
  validates :board_id, :pin_id, presence: true
  validates :board_id, uniqueness: { scope: :pin_id }

  belongs_to :pin
  belongs_to :board
end
