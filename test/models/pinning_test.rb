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

require 'test_helper'

class PinningTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
