import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
      
        <div className="mb-4">
          <h4 className="text-warning" style={ { fontFamily:"'Lobster', cursive" } } >Contact Us</h4>
          <Link to={ '/contact' } style={ { textDecoration:"none",color:"white" } }  >rajanbhupesh@gmail.com</Link>
          <p className="mb-1">+91 80005 89080</p>
        </div>
 
        <div className="mb-4">
          <h4 className="text-warning" style={ { fontFamily:"'Lobster', cursive" } }>Opening Hours</h4>
          <p className="mb-1">Monday - Thursday: 11:00 AM - 9:00 PM</p>
          <p>Friday - Saturday: 11:00 AM - 5:00 PM</p>
        </div>
        <hr className="my-3 border-light" />

        <div>
          <h4 className="text-warning me-2" style={ { fontFamily:"'Lobster', cursive" } }>Follow Us</h4>
          <a href="#" className="text-light me-3">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="#" className="text-light me-3">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="#" className="text-light me-3">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
