class CreateUsersEpisodes < ActiveRecord::Migration[5.1]
  def change
    create_table :users_episodes do |t|

      t.timestamps
    end
  end
end
