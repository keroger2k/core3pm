class UsersController < ApplicationController
  respond_to :html, :json

  def index
  	response.headers['Cache-Control'] = 'no-cache'
    @users = User.all
    respond_with(@users) do |format|
    	format.json {
	    	render :json => @users.to_json(:methods => :available)
	    }
	end
  end

end
