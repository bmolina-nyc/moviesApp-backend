import React from 'react';
import movieDetail from '../auth/apiCalls'


class ShowDetail extends React.Component{
    constructor(props){
    super(props)

    this.state = {
        title: "",
        genre: [],
        overview: "",
        tagline: "",
        poster: "",
        release_date: ""
    }
    
    this.componentWillMount = () =>{
    const movieId = this.props.match.params.movieId

    movieDetail(movieId).then((result)=>{
        result.genres.map((el) =>{return this.state.genre.push(el.name)})    
        this.setState({
            title: result.original_title, 
            overview: result.overview, 
            tagline: result.tagline,
            poster: result.poster_path,
            release_date: result.release_date,
        })
        console.log(this.state)
        })
      }
    }

    onClick = () => {
        this.props.history.push('/search')
    }

    render(){
        return(
            <div>
              <h2>{this.state.title}</h2>
              <img src={`https://image.tmdb.org/t/p/w300/${this.state.poster}`} />     
              <h4>{this.state.tagline}</h4>
              <h4>{this.state.genre.join(", ")}</h4>
              <h4>Release Date: {this.state.release_date}</h4>
              <h5>Synopsis: {this.state.overview}</h5>

              <button onClick={this.onClick}>Back to Results</button>
            </div>
        )
    }
}



export default ShowDetail;

