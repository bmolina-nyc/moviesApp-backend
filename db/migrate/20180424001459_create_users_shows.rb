class CreateUsersShows < ActiveRecord::Migration[5.1]
  def change
    create_table :users_shows do |t|

      t.timestamps
    end
  end
end
