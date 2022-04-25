class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render '/api/users/show'
    else
      render json: ['Login failed. Please check your email and password.'], status: 401
    end
  end

  def destroy
    logout!
    render json: {message: 'Logout successful'}
  end

end
