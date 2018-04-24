class CreateShows < ActiveRecord::Migration[5.1]
  def change
    create_table :shows do |t|
      t.string :name 
      t.string :genres
      t.string :network
      t.string :air_date
      t.string :air_time
      t.string :image
      t.string :summary
      t.string :premiere_date
      t.string :status

      t.timestamps
    end
  end
end
