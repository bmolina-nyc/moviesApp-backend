class CreateEpisodes < ActiveRecord::Migration[5.1]
  def change
    create_table :episodes do |t|

      t.timestamps
    end
  end
end
