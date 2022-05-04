class Api::ReviewConditionsController < ApplicationController
    def create
        # content = JSON.parse(request.raw_post)
        @review_conditions = params[:reviewConditions]
        num = 0
        while @reviewConditions do

            @reviewConditions[num].save
        end
        # @review_conditions = ReviewCondition.

    end

    def review_condition_params
        params.require(:reviewConditions).permit(_json: [:review_id, :condition_id])
        # params.require(:reviewConditions).permit(:condition_id, :review_id)
    end
end
