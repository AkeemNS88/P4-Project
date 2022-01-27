class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record


    private

    def current_user
        User.find_by_id(session[:user_id])
    end

    def invalid_record(exception)
        render json: {errors: exception.record.errors.full_messages}, status: 422
    end
end
