class Api::ReviewsController < ApplicationController
    def show
        # debugger
        @review = Review.find_by(id: params[:id])
        render :show
    end

    def create
        @review = Review.new(review_params)
        debugger
        if @review.save
            render :show
        else
            render json: ['Invalid review'], status: 401
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        @review.destroy
    end

    def update 
        @review = Review.find_by(id: params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: ['Can\'t update'], status: 401
        end
    end

    def review_params
        params.require(:review).permit(:id, :rating, :description, :date_hiked, :user_id, :activity_id, :trail_id)
    end
end
