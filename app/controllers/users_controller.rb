class UsersController < ApplicationController
  respond_to :html, :json

  def index
    @users = User.where('email <> ?', current_user.email)
    respond_with(@users) do |format|
    	format.html {}
    	format.json {
	    	render :json => @users.to_json(:methods => :available)
	    }
	end
  end

end
