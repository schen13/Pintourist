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

require 'test_helper'

class PinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
