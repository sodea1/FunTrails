class Api::ReviewsController < ApplicationController
    # after_create :send_review_id

    def index
        @reviews = Review.where(trail_id: params[:trail_id])
        render :index
    end

    def create
        @review = Review.new(review_params)
        if @review.save!
            render :show
        else
            render json: 'Invalid review', status: 401
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

    def show
        @review = Review.find_by(id: params[:id])
        render :show
    end

    private
    
    def review_params
        params.require(:review).permit(:id, :user_id, :trail_id, :photo_id, :rating, :description, :date_hiked, :activity)
    end

    # def send_review_id
    #     render :create
    # end

end
