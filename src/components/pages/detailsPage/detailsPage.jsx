import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import AppHeader from '../../app-header/app-header';
import { Link } from 'react-router-dom';
import { loadOutputData, setSuccess, clearCal } from '../../../store/actions';
import ErrorPage from '../errorPage';
import { notyInfo } from '../../noty-info/noty';

import './style.css';


const DetailsPage = () => {
    const dispatch = useDispatch()
    const { outPutData } = useSelector((state) => state.reducerData);
    const { invoice, withdraw } = useSelector((state) => state.reducerData.calculate);
    const { value } = outPutData
    if (outPutData.currency === undefined) {
        return <ErrorPage />
    };

    const { invoicePayMethod, withdrawPayMethod } = outPutData.currency;
    const valTitle = (input, output) => {
        if (input === undefined) {
            return output
        } else {
            return input
        }
    };

    const sell = valTitle(withdraw, value);
    const buy = valTitle(invoice, value);

    const sendData = () => {
        notyInfo('The request has been processed')
        dispatch(loadOutputData())
    };
    
    const clearData = () => {
        dispatch(setSuccess(true))
        dispatch(clearCal())
    };

    return (
        <div className="bottom-panel d-flex details">
            <AppHeader text={'Details'} />
            <p className='details-p'><span>Sell</span>{sell} {invoicePayMethod.title}</p>
            <p className='details-p'><span>Buy</span>{buy} {withdrawPayMethod.title}</p>
            <div className='input-box'>
                <Link className='links-light' to="/">
                    <button type="button" onClick={clearData} className="btn btn-light"> Cancel</button>
                </Link>
                <Link className='links' to='/success'>
                    <button type="button" onClick={sendData} className="btn btn-info">Confirm</button>
                </Link>
            </div>
        </div>
    );
};

export default DetailsPage

