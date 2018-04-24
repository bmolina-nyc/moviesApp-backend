class CreateUsersEpisodes < ActiveRecord::Migration[5.1]
  def change
    create_table :users_episodes do |t|
      t.integer :user_id
      t.integer :episode_id

      t.timestamps
    end
  end
end
