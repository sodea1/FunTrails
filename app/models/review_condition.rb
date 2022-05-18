class ReviewCondition < ApplicationRecord
    validates :review_id, :condition_id, presence: true

    belongs_to :review
    belongs_to :condition

    def self.update_entries(old_entries, new_entries, review_id)
        # DELETE
        old_entries.each do |id|
            if !new_entries.include?(id)
                ReviewCondition.where("review_id = #{review_id} AND condition_id = #{id}").first.destroy
            end
        end

        # CREATE
        new_entries.each do |new_id|
            if !old_entries.include?(new_id)
                new_entry = ReviewCondition.new({condition_id: new_id, review_id: review_id})
                new_entry.save!
            end
        end
    end
end
