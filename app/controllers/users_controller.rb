class UsersController < ApplicationController
  respond_to :html, :json

  def index
    if user_signed_in? 
      @users = User.where('email <> ?', current_user.email)
    else
      @users = User.all
    end
    respond_with(@users) do |format|
    	format.html {}
    	format.json {
	    	render :json => @users.to_json(:methods => :available)
	    }
	end
  end

end
