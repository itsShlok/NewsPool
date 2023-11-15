import React, { Component } from 'react'


export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">News</a>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
      
    )
  }
}

export default Navbar
