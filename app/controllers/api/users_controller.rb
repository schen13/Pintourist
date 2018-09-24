class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render_user_errors(@user.errors.full_messages)
    end
  end

  def show
    @user = User.find(params[:id])
    render 'api/users/show'
  end

  def index
    @users = User.all
    render 'api/users/index'
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render 'api/users/show'
    else
      render_user_errors(@user.errors.full_messages)
    end
  end
  
  private
  
  def user_params
    params.require(:user).permit(:username, :fname, :lname, :email, :password, :photo)
  end

  def render_user_errors(errors)
    formatted_errors = [];
    errors.each do |error|
      if error.downcase.include?("fname")
        formatted_errors.push({ fname: error.sub('Fname', "First name").concat(".") })
      elsif error.downcase.include?("lname")
        formatted_errors.push({ lname: error.sub('Lname', "Last name").concat(".") })
      elsif error.downcase.include?("email")
        formatted_errors.push({ email: error.concat(".") })
      elsif error.downcase.include?("username")
        formatted_errors.push({ username: error.concat(".") })
      elsif error.downcase.include?("password")
        formatted_errors.push({ password: error.concat(".") })
      end
    end
    render json: formatted_errors, status: 422
  end
end