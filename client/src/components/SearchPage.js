import React from 'react';
import { showSearch, registerUser } from '../auth/apiCalls';
import ShowCard from './ShowCard';

class SearchPage extends React.Component{

  state = {
    searchTerm: "",
    results: null
  }

  handleChange = (event)=>{
    this.setState({ searchTerm: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    showSearch(this.state.searchTerm).then((result) => {
      this.setState({results: result.results})
    });
    console.log(this.state.results)
  };


    render(){
        return(
            <div>
            <h3>Search for a show</h3>
              <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} />
                <br/>
                <button type="submit">Search</button>
              </form>
              {this.state.results && this.state.results.map((object, idx)=>{
                return <ShowCard key={idx} result={object} />    }
           )
         }
              
            </div>
        )
    }

}

export default SearchPage;

