class ApplicationController < ActionController::API
    include ActionController::Cookies
   before_action :authenticate_user
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

    # helper_method :current_user
    # helper_method :logged_in?

    # session[:encounter_number] ||= 0
    # session[:encounter_number] += 1
# Possible solution to tracking encounter number
    private

    def current_user
        User.find_by_id(session[:user_id])
    end

    def logged_in?
        !current_user.nil?
    end

    def invalid_record(exception)
        render json: {errors: exception.record.errors.full_messages}, status: 422
    end

    def authenticate_user
        return render json: { error: "Not authorized" }, status: :unauthorized unless current_user
      end
end
