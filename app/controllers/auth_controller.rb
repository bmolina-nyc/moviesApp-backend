class AuthController < ApplicationController
    skip_before_action :authorized, only: [:create]

    # this will be for sign in
    #{username: "name", password: "password"}
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
          token = encode_token({user_id: user.id})  # this is the payload expected for a token
          render json: {user: user, jwt: token}
        end
    end

end