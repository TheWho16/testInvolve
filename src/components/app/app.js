import React, { useEffect, useState, useSelector, useDispatch } from 'react';
import InputChangeConteiner from '../inputChange';
import Loader from '../loader';
import { getConvertedValue, loadData } from '../../store/actions'

import './app.css';

 const App = () => {
  const dispatch = useDispatch()
  const [buyCurrency, setBuyCurrency] = useState();
  const [sellCurrency, setSellCurrency] = useState();
  const { data } = useSelector((state) => state.reducerData);
  const { invoice, withdraw } = useSelector((state) => state.reducerData.calculate);
  useEffect(() => {
    loadData()
  }, []);


  if (data === undefined) {
    return <Loader />
  }

  const handleChange = (type, currency) => (e) => dispatch(getConvertedValue({ type, currency, value: e.target.value }));

  return (
    <div className="wrapper">

      <InputChangeConteiner
        value={invoice}
        select={setSellCurrency}
        onChange={handleChange(`invoice`, sellCurrency)}
        header='Sell'
        data={data.invoice} />
      <InputChangeConteiner
        value={withdraw}
        select={setBuyCurrency}
        onChange={handleChange(`withdraw`, buyCurrency)}
        header='Buy'
        data={data.withdraw} />

      <div className="todo-app">
      </div>
    </div>
  );

};

export default App


