import React from "react";

const About = () => {
  return (
    <div className="about-wrapper">
    <div className="container py-5 ">
      
      {/* Row 1 */}
      <div className="row align-items-center mb-4">
        <div className="col-md-6">
          <img src="/images/about-image1.jpg" alt="Fresh Ingredients" className="img-fluid rounded-circle shadow" />
        </div>
        <div className="col-md-6">
          <h2>Fresh Ingredients</h2>
          <p>We source the freshest ingredients daily to ensure the highest quality and taste in every bite you take.</p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row align-items-center mb-4 flex-md-row-reverse">
        <div className="col-md-6">
          <img src="/images/about-image2.jpg" alt="Cozy Ambiance" className="img-fluid w-100 h-auto rounded-circle about-img-shadow" />
        </div>
        <div className="col-md-6">
          <h2>Cozy Ambiance</h2>
          <p>Our restaurant offers a comfortable and relaxing space for family dinners, romantic dates, or casual hangouts.</p>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row align-items-center mb-4">
        <div className="col-md-6">
          <img src="/images/about-image3.jpeg" alt="Excellent Service" className="img-fluid w-100 h-auto rounded-circle shadow" />
        </div>
        <div className="col-md-6">
          <h2>Excellent Service</h2>
          <p>Our staff is dedicated to making sure you have the best dining experience, from start to finish.</p>
        </div>
      </div>

    </div>
    </div>
  );
}

export default About;
