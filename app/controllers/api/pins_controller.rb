class Api::PinsController < ApplicationController
  def create
    @pin = Pin.create(pin_params)
    @pin.user_id = current_user.id
    if @pin.save
      render 'api/pins/show'
    else
      render_pin_errors(@pin.errors.full_messages)
    end
  end

  def update
    @pin = current_user.created_pins.find(params[:id])
    if @pin
      if @pin.update_attributes(pin_params)
        render 'api/pins/show'
      else
        render_pin_errors(@pin.errors.full_messages)
      end
    else
      render json: ['You are not allowed to edit this pin.'], status: 401
    end
  end

  def index
    @pins = Pin.all
    render 'api/pins/index'
  end
  
  def show
    @pin = Pin.find(params[:id])
    render 'api/pins/show'
  end

  def destroy
    @pin = current_user.created_pins.find(params[:id])
    if @pin
      @pin.destroy
      render 'api/pins/show'
    else
      render json: ['You are not allowed to delete this pin.'], status: 401
    end
  end

  private
  
  def pin_params
    params.require(:pin).permit(:user_id, :url, :description, :photo)
  end

  def render_pin_errors(errors)
    formatted_errors = [];
    errors.each do |error|
      if error.downcase.include?("url")
        formatted_errors.push({ url: ['Invalid URL'] })
      end
    end
    render json: formatted_errors, status: 422
  end
end
