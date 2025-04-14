import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { TrophySpin } from 'react-loading-indicators';
import { Navigate, useNavigate } from 'react-router-dom';
import useFetch from './UseFetch';
import { Button } from 'bootstrap';
import Swal from 'sweetalert2';

const Menu = () => {

  // let [menuItem,setMenuItems] = useState([]);
  // let [loading,setLoading] = useState(true);
  // let navigate =  useNavigate(); 

  // useEffect( ()=>{
  //   axios.get('http://localhost:5000/menu')
  //   .then( (response)=>{ 
  //     setMenuItems(response.data);
  //     setLoading(false); 
  //   } )
  //   .catch( (error)=>{ 
  //     console.error("Error fetching menu: ",error); 
  //   } )
  // },[]);

  let [intervalId,setIntervalId] = useState(null);

  let navigate = useNavigate(); 
  let { menuItem,loading,error } = useFetch("http://localhost:5000/menu");


  // let addToCart = (id) =>{
  //   navigate(`/cart/${id}` )
  // }

  useEffect(() => {
    if (error && intervalId === null) {
      const id = setInterval(() => {
        Swal.fire({
          title: 'Error',
          text: error,
          icon: 'error',
          timer: 2000,
          showConfirmButton: false,
        });
      }, 5000);
      setIntervalId(id); // Save the interval ID
    }
  
    // If error is gone and an interval is running, clear it
    if (!error && intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  
    // Cleanup when the component unmounts
    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    };
  }, [error, intervalId]);
    

  if(loading){
    return (
    <div className='d-flex justify-content-center align-items-center' style={ { backgroundColor:"#fff",height:"100vh" } }>
        <TrophySpin color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} text={ " LOADING..."} size='large' />
    </div>
    )
  }

  else{
  return (
    <div className='menu-wrapper'>
      <div className="container py-5">
        <h2 className="text-center mb-4 text-light">Our Menu</h2>
        <div className="row">
          {menuItem.map(item => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card h-100" >
                <img src={item.image} 
                width={ "200px" } 
                height={ "250px" } 
                className="card-img-top" 
                alt={item.name}
                style={ { cursor:"pointer"} }
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <strong>₹{item.price}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
  }
}

// <div className="card-footer d-flex">
//     <button className='btn btn-warning' onClick={ ()=> addToCart(item.id) }>Add to Cart</button>
// </div>

export default Menu;

