class MastersController < ApplicationController

    def index
        render json: Master.all
    end

    def show
        master = find_master
        render json: master
    end


    private

    def find_master
        Master.find(params[:id])
    end
end
