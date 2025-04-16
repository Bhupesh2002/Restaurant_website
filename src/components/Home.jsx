import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';


let Home = () => {
  return (
      <>
      <section className="home-section d-flex align-items-center justify-content-center text-center text-white">
        <div>
          <h1 className="display-4">Welcome to <span className="text-warning">Tasty</span><span className="text-white">Nest</span></h1>
          <p className="lead">Delicious food, delivered with love.</p>
          <Link to="/menu" className="btn btn-warning mt-3 px-4 py-2" style={ { fontFamily:"arial,sans-serif" } }>Explore Menu</Link>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-4">
          <h2 className="about-title">About <span className="text-warning">Tasty Nest</span></h2>
          
          <p className="about-text">
            At Tasty Nest, we serve love on a plate. Whether you're craving comforting classics or exploring 
            new flavors,our chefs bring passion and creativity to every dish. Step in and experience food like never before.
          </p>
          <p className='about-text'>
          Our passion lies in crafting delicious meals that bring people together. From flavorful 
          starters to mouth-watering main courses, every dish is made with love and the finest ingredients. 
          Whether you're dining in or ordering out,we ensure every bite feels warm and welcoming.
           We take pride in offering a cozy atmosphere that feels just like home.
          </p>
          <p className='about-text'>
          We believe great food tells a story.
          Inspired by traditional recipes and modern twists, our menu is designed to satisfy every craving. 
          Our team is dedicated to making your visit memorable — with friendly service, fresh flavors, and a touch of charm.
          </p>
          </div>
        <div className="col-md-6 text-center">
          <img src="/images/about-image.jpg" alt="About us"
            className="img-fluid rounded-circle about-img"/>
          </div>
        </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
