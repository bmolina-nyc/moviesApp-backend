import React from 'react';
import DropDownMenu from './DropDownMenu'

const ShowCard = (props) => (
    <div>
      <h3>{props.show.name}</h3>
      {props.show.image === null ? <p>No Image</p> : <img src={props.show.image.medium} alt=""/>}
      <h4>Genres: {props.show.genres.join(", ")}</h4>
      <button onClick={this.handleOnClick}>Add to Favorites</button> 
      <DropDownMenu />
    </div>
)


///this button needs to be an action dispatch to a reducer - Redux 
// When clicked we shoudl also be able to remove from favoraites
//

 // <img src={props.show.image.medium} alt=""/>
  

export default ShowCard;