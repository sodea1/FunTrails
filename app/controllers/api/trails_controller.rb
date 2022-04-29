class Api::TrailsController < ApplicationController
    def show
        @trail = Trail.find_by(id: params[:id])
        if @trail 
            # debugger
            render :show
        else
            render json: ['Trail does not exist'], status: 404
        end
    end

    def index
        # include associations with .includes
        @trails = Trail.all.includes(:tags)
        render :index
    end
end
