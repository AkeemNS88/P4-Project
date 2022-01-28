class UsersController < ApplicationController
    #what is this v ???????????
    # wrap_parameters format: []
    skip_before_action :authenticate_user, only: [:create, :show]

    def index 
        users = User.all 
        render json: users
        # render json: users, each_serializer: UserSerializer

    end

    def show 
        user = User.find_by(id: params[:id])
        render json: user, include: :encounters
    end

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :ok
    end

    def create 
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created 
        else 
            render json: user.errors.full_messages, status: :unprocessable_entity
        end 
    end

    def destroy 
        user = User.find_by(id: params[:id])
        if user 
            user.destroy
            head :no_content 
        else  
            render json: "User does not exist", status: :not_found 
        end
    end

    
    private
    
    def user_params
        params.permit(:username, :password, :biography, :encounters)
    end
end

