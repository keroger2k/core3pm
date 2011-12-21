class UsersController < ApplicationController
  respond_to :html, :json

  def index
    @users = User.all
    respond_with(@users) do |format|
    	format.json {
		  	response.headers['Cache-Control'] = 'no-cache'
	    	render :json => @users.to_json(:methods => :available)
	    }
	end
  end

end
