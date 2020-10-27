import React, { useDispatch} from 'react';
import Vector from '../../../assets/Vector.png'
import './style.css';
import { Link } from 'react-router-dom';
import AppHeader from '../../app-header/app-header';

const SuccessPage = () => {

  const dispatch = useDispatch()

  const clearData =()=>{
    dispatch()
  }
  return (

      <div className="bottom-panel d-flex success">
      <img className='success-img' src={Vector} alt='vector' />
      <AppHeader text={'Success!'} />
      <p>Your exchange order has been placed successfuly and will be processed soon</p>
      <button type="button" onClick={clearData} className="btn btn-info"><Link className='link' to="/">Home</Link></button>
    </div>

  );
};

export default SuccessPage

