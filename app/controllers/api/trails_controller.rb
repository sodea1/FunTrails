class Api::TrailsController < ApplicationController
    def show
        @trail = Trail.find(params[:id])
        if @trail 
            render :show
        else
            render json: ['Trail does not exist'], status: 404
        end
    end
end
