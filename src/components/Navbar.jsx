import React from "react";
import { Link } from "react-router-dom";
import RestaurantIcon from '@mui/icons-material/Restaurant';

let Navbar = ()=> {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark p-1">
        <div className="container">
          <Link className="navbar-brand" to="/" style={ {  fontFamily:"Georgia, sans serif" , fontSize:"30px" } }>
          <RestaurantIcon style={ { marginRight:"3px" } }/>
          <span style={{ color: "#ffcc00" }}>Tasty</span>
          <span style={{ color: "#ffffff" }}>Nest</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2">
                <Link className="nav-link underline-hover" to="/">HOME</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link underline-hover" to="/menu">MENU</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link underline-hover" to="/about">ABOUT</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link underline-hover" to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}


export default Navbar;