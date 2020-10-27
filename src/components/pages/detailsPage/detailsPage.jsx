import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import AppHeader from '../../app-header/app-header';
import { Link } from 'react-router-dom';




import './style.css';
import { loadOutputData } from '../../../store/actions';

const DetailsPage = () => {
    const dispatch = useDispatch()
    const { outPutData, success } = useSelector((state) => state.reducerData);
    const { invoice, withdraw } = useSelector((state) => state.reducerData.calculate);
    const { value } = outPutData
    const { invoicePayMethod, withdrawPayMethod } = outPutData.currency
    console.log(value, 'value')
    const valTitle = (input, output) => {
        if (input === undefined) {
            return output
        } else {
            return input
        }

    }
    const sell = valTitle(withdraw, value)
    const buy = valTitle(invoice, value)

    const sendData = () => {
        dispatch(loadOutputData())
    }


    return (
        <Fragment>
            <div className="bottom-panel d-flex details">
                <AppHeader text={'Details'} />

                <p className='details-p'><span>Sell</span>{sell} {invoicePayMethod.title}</p>
                <p className='details-p'><span>Buy</span>{buy} {withdrawPayMethod.title}</p>

                <div className='input-box'>
                    <Link to="/"><button type="button" className="btn btn-light">Cancel</button></Link>
                    <button type="button" onClick={sendData} className="btn btn-info"><Link className='links' to={success ? '#' : '/success'} >Confirm</Link></button>

                </div>
            </div>
        </Fragment>
    );
};

export default DetailsPage

