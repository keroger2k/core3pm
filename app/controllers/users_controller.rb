class UsersController < ApplicationController
  respond_to :html, :json

  def index
    @users = User.all
    respond_with(@users) do |format|
    	format.json {
	    	render :json => @users.to_json(:methods => :available)
	    }
	end
  end

end
