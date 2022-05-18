class Api::ConditionsController < ApplicationController

    def index 
        @conditions = Condition.all
        render :index
    end

end
