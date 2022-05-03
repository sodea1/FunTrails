class Api::ReviewConditionsController < ApplicationController
    def create
        debugger
        @review_conditions = params[:reviewConditions]
        num = 0
        debugger
        while @reviewConditions do
            debugger
            @reviewConditions[num].save
        end
        debugger
        # @review_conditions = ReviewCondition.

    end

    def review_condition_params
        params.require(:reviewConditions).permit([:condition_id, :review_id])
    end
end
