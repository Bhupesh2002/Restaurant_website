// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import useFetch from './UseFetch';

// const Cart = () => {
//   // let [count,setCount] = useState(0);
//   let { id } = useParams();
//   let { menuItem, loading, error } = useFetch(`http://localhost:5000/menu/${id}`);

//   if (loading) return <h3 className='text-center mt-5'>Loading...</h3>;
//   if (error) return <h3 className='text-danger text-center mt-5'>Error loading item</h3>;

//   return (
//     <div className='cart-wrapper'>
//       <div className="container py-5">
//         <h2 className="text-center mb-4 text-success">Cart</h2>
//         <div className="card mx-auto" style={{ maxWidth: "400px" }}>
//           <img src={menuItem.image} className="card-img-top" alt={menuItem.name} />
//           <div className="card-body">
//             <h5 className="card-title">{menuItem.name}</h5>
//             <p className="card-text">{menuItem.description}</p>
//             <strong>₹{menuItem.price}</strong>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
