import React from 'react';
import { useDispatch } from 'react-redux'
import Vector from '../../../assets/error.png'
import { Link } from 'react-router-dom';
import AppHeader from '../../app-header/app-header';
import { clearCal, setSuccess } from '../../../store/actions';

import './style.css';

const ErrorPage = () => {

    const dispatch = useDispatch();

    const clearData = () => {
        dispatch(clearCal())
        dispatch(setSuccess(true))
    };

    return (
        <div className="bottom-panel d-flex success">
            <img className='success-img' src={Vector} alt='vector' />
            <AppHeader text={'Ooooops!'} />
            <p>Something bad has happened. Return to the main page</p>
            <Link className='links' to="/">
                <button type="button" onClick={clearData} className="btn btn-info">Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage

