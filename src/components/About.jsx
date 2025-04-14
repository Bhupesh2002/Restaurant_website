import React, { useEffect, useState } from 'react'

const About = () => {

  let [teamMem,setTeamMem] = useState([]);
  
  useEffect( ()=>{
    getTeam();
  },[] )

  async function getTeam(e){
    try{
      let response = await fetch("http://localhost:5000/team");
      if(response.ok){
        let data = await response.json();
        setTeamMem(data);
      }
      else{
        console.log("Failed to Fetch!!!");
      }
    }

    catch(error){
      console.log("Error: ",error);
    }
  };


  return(
    <div className="container py-5">
      <h2 className="text-center mb-4">Meet Our Team</h2>
        <div className="row justify-content-center">
          {teamMem.length > 0 ? (
            teamMem.map(member => (
              <div className="col-md-2 mx-3 mb-4" key={member.id}>
              <div className="card h-100 shadow-sm">
              <img
                src={member.image}
                alt={member.name}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}/>
              <div className="card-body text-center">
              <h5 className="card-title">{member.name}</h5>
              <p className="card-text text-muted">{member.role}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No team members found!</p>
        )}
      </div>
    </div>
   );
 }

export default About;