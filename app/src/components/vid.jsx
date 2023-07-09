import React from 'react';
import video from '../assets/bcv1.mp4';
const vid = () => {
    return (
      <div className='container justify-content-center'>
        <video src= {video} autoPlay loop style={{ width: '100%', height: '300pt' }}/>
    
          </div> 
    )
  };
  
  export default vid;