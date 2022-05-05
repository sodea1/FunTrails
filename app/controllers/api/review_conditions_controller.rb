class Api::ReviewConditionsController < ApplicationController
    def create
        review_id = Review.last.id
        @review = Review.where(id: review_id).first
        #  params[:reviewConditions]['0']['condition_id'] = '25'
        num = 0
        while params[:reviewConditions]["#{num}"] do

            condition_name = params[:reviewConditions]["#{num}"]['condition'] # "Bugs"

            condition_id = Condition.find_by(name: condition_name).id

            review_condition = {condition_id: condition_id, review_id: review_id}
            new_entry = ReviewCondition.new(review_condition)

            new_entry.save!

            num += 1

        end
        render '/api/reviews/show'
        # @review_conditions = ReviewCondition.

    end

    def review_condition_params
        params.require(:reviewConditions).permit(:condition_id)
        # params.require(:reviewConditions).permit(:condition_id, :review_id)
    end
end
