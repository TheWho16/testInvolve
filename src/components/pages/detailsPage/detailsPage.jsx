import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import AppHeader from '../../app-header/app-header';
import { Link } from 'react-router-dom';




import './style.css';

const DetailsPage = () => {
    const dispatch = useDispatch()
    const { outPutData } = useSelector((state) => state.reducerData);
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
    const sell = valTitle(invoice, value)
    const buy = valTitle(withdraw, value)



    return (
        <Fragment>
            <div className="bottom-panel d-flex details">
                <AppHeader text={'Details'} />

                <p className='details-p'><span>Sell</span>{sell} {invoicePayMethod.title}</p>
                <p className='details-p'><span>Buy</span>{buy} {withdrawPayMethod.title}</p>

                <div className='input-box'>
                    <Link to="/"><button type="button" className="btn btn-light">Cancel</button></Link>
                    <Link to="/success"><button type="button" className="btn btn-info">Confirm</button></Link>

                </div>
            </div>
        </Fragment>
    );
};

export default DetailsPage

