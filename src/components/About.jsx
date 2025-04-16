import React from "react";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="container py-5 ">
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <img src="/images/about-image1.jpg" alt="Fresh Ingredients" className="img-fluid rounded-circle shadow" />
          </div>
          <div className="col-md-6">
            <h2 style={ { color:"orange" } }>Fresh Ingredients</h2>
            <p style={ { fontSize:"18px", color:"gray" } }>
              At our restaurant, we believe great food starts with great ingredients. Every morning, 
              we carefully select the freshest vegetables, meats, and spices from trusted local suppliers.
               Our chefs craft each dish to highlight the natural flavors of these high-quality components. 
               Whether it's a simple salad or a gourmet entrée, freshness is at the heart of every bite. 
               We never compromise on taste, and you’ll feel the difference in every meal we serve.</p>
          </div>
        </div>
        <div className="row align-items-center mb-4 flex-md-row-reverse">
          <div className="col-md-6">
            <img src="/images/about-image2.jpg" alt="Cozy Ambiance" className="img-fluid w-100 h-auto rounded-circle about-img-shadow" />
          </div>
          <div className="col-md-6">
            <h2 style={ { color:"orange" } }>Cozy Ambience</h2>
            <p style={ { fontSize:"18px", color:"gray" } }>
              Our restaurant is designed to offer a warm and welcoming atmosphere that makes you feel 
              right at home. From soft lighting to comfortable seating, every corner is crafted for 
              relaxation and connection. Whether you're sharing a meal with family or enjoying a quiet 
              dinner date, our cozy ambiance sets the perfect mood. The soothing background music and 
              elegant decor create a memorable dining experience. Step in, sit back, and let the inviting 
              vibe enhance every bite you take.</p>
          </div>
        </div>
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <img src="/images/about-image3.jpeg" alt="Excellent Service" className="img-fluid w-100 h-auto rounded-circle shadow" />
          </div>
          <div className="col-md-6">
            <h2 style={ { color:"orange" } }>Excellent Service</h2>
            <p style={ { fontSize:"18px", color:"gray" } }>
              service is more than just delivering food — it's about creating unforgettable moments.
              Our dedicated staff ensures that your dining experience is smooth, attentive, and friendly
              from the moment you arrive. We believe in genuine hospitality that makes every guest feel
              valued and cared for. Whether it’s a special request or a simple smile, we go the extra 
              mile to make you comfortable. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
