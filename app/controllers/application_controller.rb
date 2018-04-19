class ApplicationController < ActionController::API
  before_action :authorized, except: [:welcome]

    def encode_token(payload)
      token = JWT.encode(payload, "catman")
    end

    def auth_header 
      header = request.headers['Authorization']
    end

    def decoded_token
      if auth_header
        token = auth_header.split(" ")[1]
        begin
          JWT.decode(token, "catman", true, {algorithm: 'HS256'})
        rescue JWT::DecodeError
          [{}]
        end
        end
    end

    def current_user
      if decoded_token
        user_id = decoded_token[0]["user_id"]
        @user = User.find(user_id)
      end
    end

    def logged_in?
      !!current_user  #get true or false based on the above 
    end

    def authorized
      redirect_to "/welcome" unless logged_in?
    end

    def welcome
        render json: {message: "please log in"}
    end

end
