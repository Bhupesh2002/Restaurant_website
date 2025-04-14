import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Navigate } from "react-router-dom";
// import { Button } from "bootstrap";
import { FaOpencart } from "react-icons/fa";

let Navbar = ()=> {

  let navigate = useNavigate();

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
              {/* <li className="nav-item mx-2" tabIndex={0}>
                <span className="nav-link text-light" 
                style={ { display:"flex",alignItems:"center",cursor:"pointer" } } 
                 onClick={ ()=> navigate('/cart')}>
                  <FaOpencart  size={20}/>
                </span>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    )
}


export default Navbar;