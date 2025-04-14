import React from 'react';
import { TrophySpin } from 'react-loading-indicators';

const Loader = () => {
  return (
        <div className='d-flex justify-content-center align-items-center' style={ { backgroundColor:"#fff",height:"100vh" } }>
          <TrophySpin color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} text={ " LOADING..."} size='large' />
        </div>
  );
}

export default Loader;