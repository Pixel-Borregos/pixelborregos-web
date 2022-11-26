import React from 'react';
import { Link } from 'react-router-dom';
import "../style/landing.css";


function landingBody() {
    return (
      <div className='language-container'>
        <video src='/videos/P2_AdobeExpress.mp4' autoPlay loop muted />
        <h1>PIXEL BORREGOS</h1>
        <p>Wanna know more?</p>
      </div>
    );
  }
  
  export default landingBody;