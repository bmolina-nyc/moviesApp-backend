class ShowsController < ApplicationController


   def show 
     show = Show.all
     render json: { shows: show}
   end
end
