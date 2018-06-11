import React, { Component } from 'react';

class DropDownMenu extends React.Component {
      
    state = {
        showMenu: false
    }

    showMenu = (event) => {
      event.preventDefault();
      
      this.setState({ showMenu: true }, () => {
        document.addEventListener('click', this.closeMenu);
      });
    }
    
    closeMenu = (event) => {
      if (!this.dropdownMenu.contains(event.target)) {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        })
      }
    }

    render(){
        return(
          <div>
            <button onClick={this.showMenu}>
              ...
            </button>
              
            {
                this.state.showMenu ? (
                    <div className="menu"
                     ref={(element) => {
                       this.dropdownMenu = element;
                     }}
                    >
                      <button> Like </button>
                      <button> Dislike </button>
                      <button> Already Watched </button>
                      <button> Add to Watchlist </button>
                    </div>
                  )
                  : (
                    null
                  )
            }
          </div>
        )
    }
}

// add css dropdown and hover capability 
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown

export default DropDownMenu;