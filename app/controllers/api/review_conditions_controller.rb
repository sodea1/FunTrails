class Api::ReviewConditionsController < ApplicationController
    def create
        review_id = Review.last.id
        @review = Review.where(id: review_id).first

        num = 0
        while params[:reviewConditions]["#{num}"] do
            condition_name = params[:reviewConditions]["#{num}"]['name'] # "Bugs"
            condition_id = Condition.find_by(name: condition_name).id
            review_condition = {condition_id: condition_id, review_id: review_id}
            new_entry = ReviewCondition.new(review_condition)
            new_entry.save!
            num += 1
        end
        # returns a review
        render '/api/reviews/show'

    end

    def update
        old_entries = ReviewCondition.where("review_id = #{params['id']}").pluck(:condition_id)
        review_id = params['id']
        @review = @review = Review.where(id: review_id).first
        # extract new condition_ids
        new_entries = []
        num = 0
        while params[:reviewConditions]["#{num}"] do
            condition_name = params[:reviewConditions]["#{num}"]['name'] # "Bugs"
            condition_id = Condition.find_by(name: condition_name).id
            new_entries.push(condition_id)
            num += 1                       
        end
        
        ReviewCondition.update_entries(old_entries, new_entries, review_id)
        render '/api/reviews/show'
    end

    def review_condition_params
        params.require(:reviewConditions).permit(:condition_id)
        # params.require(:reviewConditions).permit(:condition_id, :review_id)
    end
end
