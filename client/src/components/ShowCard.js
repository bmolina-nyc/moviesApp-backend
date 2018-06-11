import React from 'react';
import DropDownMenu from './DropDownMenu'
import {Redirect, Link} from 'react-router-dom'
import ShowDetail from './ShowDetail'

class ShowCard extends React.Component { 
  constructor(props){
    super(props) 
  }

  state = {
    redirect: false 
  }

  handleSubmit = () =>{
    this.setState({redirect: true})
  }

  render(){
    if (this.state.redirect){
      const movieId = this.props.result.id
     return <Redirect to={`/movies/${movieId}`}/>    
    }
    return (
      
      <div>
       <h3>{this.props.result.title}</h3>
       <img src={`https://image.tmdb.org/t/p/w300/${this.props.result.poster_path}`} onClick={this.handleSubmit}  />
      
       <DropDownMenu />   
      </div>
    )
   }
}


///this button needs to be an action dispatch to a reducer - Redux 
// When clicked we shoudl also be able to remove from favoraites
//



// <button onClick={this.handleOnClick}>Add to Favorites</button> 

  

export default ShowCard;