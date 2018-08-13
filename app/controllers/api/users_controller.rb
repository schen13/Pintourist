class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      errors = [];
      @user.errors.full_messages.each do |error|
        if error.downcase.include?("fname")
          errors.push({ fname: error.sub('Fname', "First name").concat(".") })
        elsif error.downcase.include?("lname")
          errors.push({ lname: error.sub('Lname', "Last name").concat(".") })
        elsif error.downcase.include?("email")
          errors.push({ email: error.concat(".") })
        elsif error.downcase.include?("username")
          errors.push({ username: error.concat(".") })
        elsif error.downcase.include?("password")
          errors.push({ password: error.concat(".") })
        end
      end
      render json: errors, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render 'api/users/show'
  end

  private
  
  def user_params
    params.require(:user).permit(:username, :fname, :lname, :email, :password)
  end
end