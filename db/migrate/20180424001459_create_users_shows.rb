class CreateUsersShows < ActiveRecord::Migration[5.1]
  def change
    create_table :users_shows do |t|
      t.integer :user_id
      t.integer :show_id
      
      t.timestamps
    end
  end
end
