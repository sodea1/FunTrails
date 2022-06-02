class Api::ParksController < ApplicationController
    def index 
        @parks = Parks.all
        render :index
    end

    def show
        @park = Park.find(id: params[:id])
        render :show
    end
end
