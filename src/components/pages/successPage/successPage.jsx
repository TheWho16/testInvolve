import React, { } from 'react';
import Vector from '../../../assets/Vector.png'
import './style.css';
import { Link } from 'react-router-dom';
import AppHeader from '../../app-header/app-header';

const SuccessPage = () => {


  return (

    <div className="bottom-panel d-flex success">
      <img className='success-img' src={Vector} alt='vector' />
      <AppHeader text={'Success!'} />
      <p>Your exchange order has been placed successfuly and will be processed soon</p>
      <Link to="/"><button type="button" className="btn btn-info">Home</button></Link>
    </div>

  );
};

export default SuccessPage

