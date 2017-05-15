class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    @current_user ||= User.new(name: 'Rodrigo', email: 'rodrigo@email.com')
  end
end
