import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ErrorPage from '../errorPage';
import Vector from '../../../assets/Vector.png'
import { Link } from 'react-router-dom';
import AppHeader from '../../app-header/app-header';
import { clearCal, setSuccess } from '../../../store/actions';

import './style.css';

const SuccessPage = () => {

  const dispatch = useDispatch()
  const { respData } = useSelector((state) => state.reducerData);
  if (respData === true) {
    return <ErrorPage />
  }
  const clearData = () => {
    dispatch(clearCal())
    dispatch(setSuccess(true))
  }

  return (
    <div className="bottom-panel d-flex success">
      <img className='success-img' src={Vector} alt='vector' />
      <AppHeader text={'Success!'} />
      <p>Your exchange order has been placed successfuly and will be processed soon</p>
      <Link className='links' to="/">
        <button type="button" onClick={clearData} className="btn btn-info">Home</button>
      </Link>
    </div>
  );
};

export default SuccessPage

