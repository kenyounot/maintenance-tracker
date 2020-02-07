class Api::V1::UsersController < ApplicationController
    skip_before_action :authenticate_request
   
    def create
      user = User.new(user_params)
      command = AuthenticateUser.call(user_params[:email], user_params[:password])

      if user.save
        render json: { data: {
          user: {
            name: user.name,
            email: user.email,
            token: command.result
          }
        } }
      end
    end

    def authenticate
      command = AuthenticateUser.call(params[:email], params[:password])
   
      if command.success?
        render json: { auth_token: command.result}
      else
        render json: { error: command.errors }, status: :unauthorized
      end
    end

    private

    def user_params
      params.permit(:name, :email, :password, :password_confirmation)
    end
end