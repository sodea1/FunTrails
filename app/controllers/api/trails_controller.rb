class Api::TrailsController < ApplicationController
    def show
        debugger
        @trail = Trail.find(params[:id])
        if @trail 
            debugger
            render :show
        else
            render json: ['Trail does not exist'], status: 404
        end
    end

end
