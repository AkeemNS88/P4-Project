class SessionsController < ApplicationController
    skip_before_action :authenticate_user, only: [:create, :login]

    def create
        user = User.find_by_username(params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    def login
        user = User.find_by_username(params[:username])

        if user.authenticate(params[:password])

            session[:user_id] = user.id
            # cookies[:encounter_counter] += 1 ?
            render json: user, status: :ok
        else
            render json: {error: "Auth creds not valid"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
    end
end
