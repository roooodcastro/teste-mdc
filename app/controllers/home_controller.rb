class HomeController < ApplicationController
  def index; end

  def send_flash
    flash_type = [:notice, :warning, :error].sample
    flash.now[flash_type] = 'Hello World!'
    render :index
  end
end
