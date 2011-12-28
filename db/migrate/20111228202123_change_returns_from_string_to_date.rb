class ChangeReturnsFromStringToDate < ActiveRecord::Migration
  def up
  	change_column :users, :returns, :datetime
  end

  def down
  	change_column :users, :returns, :text
  end
end
