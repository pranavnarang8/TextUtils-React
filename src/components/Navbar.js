import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { Link, BrowserRouter as Router } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      {/* <Router> */}
      <Link className="navbar-brand" to="/">{props.title}</Link>
      {/* <a className="navbar-brand" href="#">{props.title}</a> */}
      {/* </Router> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <Router> */}
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
            {/* <a className="nav-link" href="#">About</a> */}
          </li>
          {/* </Router> */}
        </ul>
        
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div className="form-check form-switch">
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className={`form-check-label text-${props.mode==="light"?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
        
        {props.mode==="dark" && <div className="form-check form-switch mx-2">
          <input className="form-check-input" onClick={props.toggleRed} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className={`form-check-label text-${props.mode==="light"?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Red Dark Mode</label>
        </div>}
      </div>
    </div>
  </nav>
  )
}

//Include this check to make sure that if the wrong type of prop is being passed, then a error is thrown as well in the console
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired  
}

//To set default Props
Navbar.defaultProps = {
    title: "Set Title Here",
    aboutText: "About Text Here"
}
