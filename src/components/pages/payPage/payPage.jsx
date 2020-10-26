import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import InputChange from '../../inputChange';
import Loader from '../../loader';
import { getConvertedValue, loadData } from '../../../store/actions'
import { Link } from 'react-router-dom';

import './style.css';

const PayPage = () => {
    const dispatch = useDispatch()
    const [notyI, setNotyI] = useState(true);
    const [notyII, setNotyII] = useState(true);

    const [buyCurrency, setBuyCurrency] = useState();
    const [sellCurrency, setSellCurrency] = useState();
    const { data, succses } = useSelector((state) => state.reducerData);
    const { invoice, withdraw } = useSelector((state) => state.reducerData.calculate);
    useEffect(() => {
        dispatch(loadData())
    }, []);


    if (data === undefined) {
        return <Loader />
    }

    const handleChange = (types, currency) => (e) => {

        console.log(types, currency)
        return dispatch(getConvertedValue({ types, currency, value: e.target.value }))
    };

    const currency = { invoicePayMethod: sellCurrency, withdrawPayMethod: buyCurrency }
    const noty = (notyI || notyII)

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
            <button type="button" className="btn btn-info"><Link className='links' to={succses ? '#' : '/details'} >Exchange</Link></button>
        </Fragment>
    );
};

export default PayPage

