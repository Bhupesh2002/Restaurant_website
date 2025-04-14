import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
// import Cart from './components/Cart';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState,useEffect } from 'react';
import Loader from './components/Loader';

function App() {

  let [loading,setLoading] = useState(true);

  useEffect(()=>{
    let timer = setTimeout(()=>{
      setLoading(false);
    },3000);
    return ()=>{ clearTimeout(timer);}
  },[]);

  
  if (loading) {
    return <Loader />;
  }
  else{
    return (
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/'  element = { <Home /> }/>
            <Route path='/menu'  element = { <Menu /> }/>
            <Route path='/about'  element = { <About /> }/>
            <Route path='/contact'  element = { <Contact /> }/>
            {/* <Route path="/cart/:id" element = { <Cart/> } /> */}
          </Routes>
        </Router>
    )
  }

}

export default App;
