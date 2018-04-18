class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

    #to sign in {username: "name", password: "password"}
    # I am creating a user
    def create
      user = User.new(username: params[:username], password: params[:password])
      if user.save
        token = encode_token({user_id: user.id})  # this is the payload expected for a token
        render json: {user: user, jwt: token}
      end
    end

    #grabbing a user through the jwt token
    def me
      if @user
        render json: {user: @user, books: @user.books}
      else
        render json: {message: "Error- Gimme right JWT"}
      end
    end


end