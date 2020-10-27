import React from 'react';
import PayPage from '../pages/payPage';
import SuccessPage from '../pages/successPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'
import DetailsPage from '../pages/detailsPage/detailsPage';

import './app.css';

const App = () => {
  const { success } = useSelector((state) => state.reducerData);

  return (
    <div className='wrapper'>
      <Router>
        <Switch>
          <Route path='/' exact render={() => <PayPage />} />
          <Route path='/details' exact render={() => <DetailsPage />} />
          <Route path='/success'>
            {success ? <DetailsPage /> : <SuccessPage />}
          </Route>
        </Switch>
      </Router>
    </div>
  );

};

export default App


