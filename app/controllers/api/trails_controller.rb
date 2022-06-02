class Api::TrailsController < ApplicationController
    def show
        @trail = Trail.find_by(id: params[:id])
        if @trail
            render "/api/trails/show"
        else
            render json: ['Trail does not exist'], status: 404
        end
    end

    def index
        # include associations with .includes
        @trails = Trail.all.includes(:tags)
        render "/api/trails/index"
    end

    def trail_params
        params.require(:trail).permit(:t_name, :longitude, :latitude, :difficulty_level, :route_type, :estimated_time, :description, :state, :park_id, :country, :elevation_gain, :length, photos: [])
    end
end
