class ShowsController < ApplicationController


   def show 
     monster = Monster.all
     render json: { monsters: monster}
   end
end
