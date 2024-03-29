class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :name, :message, :available, :returns, :email, :password, :password_confirmation, :remember_me
  validates_presence_of :name

  def update_with_password(params={}) 
    if params[:password].blank? 
      params.delete(:password) 
      params.delete(:password_confirmation) if 
      params[:password_confirmation].blank? 
    end 
    update_attributes(params) 
  end 

  def available
    !self.returns?
  end

end
