class Api::ParksController < ApplicationController
    def index
        @parks = Park.all
        render 'api/parks/index'
    end

    def show
        @park = Park.find(id: params[:id])
        render :show
    end
end
