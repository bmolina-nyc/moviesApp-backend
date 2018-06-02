import React from 'react';

class DashboardPage extends React.Component {

  componentDidMount(){
    this.forceUpdate()
  }
  
  render(){
    return(
      <div>
      On the main dashboard Page - this should show all of our favorite stuff

      </div>
    )
  }
}


export default DashboardPage;