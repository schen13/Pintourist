class Api::PinningsController < ApplicationController
  before_action :require_logged_in

  def create
    @pinning = Pinning.new(pinning_params)
    if @pinning.save
      render 'api/pinnings/show'
    else
      render_pinning_errors(@pinning.errors.full_messages)
    end
  end

  def destroy
    @pinning = Pinning.where(
      board_id: params[:pinning][:board_id],
      pin_id: params[:pinning][:pin_id]
    )
    if @pinning
      @pinning.destroy
      render 'api/pinnings/show'
    else
      render_pinning_errors(@pinning.errors.full_messages)
    end
  end

  private

  def pinning_params
    params.require(:pinning).permit(:board_id, :pin_id)
  end

  def render_pinning_errors(errors)
    formatted_errors = [];
    errors.each do |error|
      if error.downcase.include?("board")
        formatted_errors.push({ board: error })
      end
      if error.downcase.include?("pin")
        formatted_errors.push({ pin: error })
      end
    end
    render json: formatted_errors, status: 422
  end
end
