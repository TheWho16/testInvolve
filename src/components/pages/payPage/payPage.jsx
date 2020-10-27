import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import InputChange from '../../inputChange';
import Loader from '../../loader';
import { getConvertedValue, loadData, setSuccess } from '../../../store/actions'
import { Link } from 'react-router-dom';
import { notyInfo } from '../../noty-info/noty';

import './style.css';

const PayPage = () => {
    const dispatch = useDispatch()
    const [notyI, setNotyI] = useState(true);
    const [notyII, setNotyII] = useState(true);
    const [buyCurrency, setBuyCurrency] = useState();
    const [sellCurrency, setSellCurrency] = useState();
    const { data, success } = useSelector((state) => state.reducerData);
    const { invoice, withdraw } = useSelector((state) => state.reducerData.calculate);
    useEffect(() => {
        dispatch(loadData())
    }, []);

    if (data === undefined) {
        return <Loader />
    };

    const handleChange = (types, currency) => (e) => {
        return dispatch(getConvertedValue({ types, currency, value: e.target.value }));
    };

    const popUp = () => {
        if (success === true) {
            notyInfo('Enter your money transfer details')
        };
        dispatch(setSuccess(true));
    };

    const currency = { invoicePayMethod: sellCurrency, withdrawPayMethod: buyCurrency };
    const noty = (notyI || notyII);

    return (
        <Fragment>
            <div className="input-box">
                <InputChange
                    value={withdraw}
                    noty={noty}
                    setNoty={setNotyI}
                    select={setSellCurrency}
                    onChange={handleChange(`invoice`, currency)}
                    header='Sell'
                    placeholder='Sell'
                    data={data.invoice} />
                <InputChange
                    value={invoice}
                    noty={noty}
                    setNoty={setNotyII}
                    select={setBuyCurrency}
                    onChange={handleChange(`withdraw`, currency)}
                    header='Buy'
                    placeholder='Buy'
                    data={data.withdraw} />
            </div>
            <Link className='links' to={success ? '#' : '/details'}>
                <button type="button" onClick={popUp} className="btn btn-info">Exchange
                 </button>
            </Link>
        </Fragment>
    );
};

export default PayPage

