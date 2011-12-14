class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :name, :available, :message, :returns, :email, :password, :password_confirmation, :remember_me
  validates_presence_of :name

  def update_with_password(params={})
    params.delete(:current_password)
    self.update_without_password(params)
  end

end
