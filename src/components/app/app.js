import React, { Fragment } from 'react';
import PayPage from '../pages/payPage';
import SuccessPage from '../pages/successPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './app.css';
import DetailsPage from '../pages/detailsPage/detailsPage';

const App = () => {


  return (
    <div className='wrapper'>
      <Router>
        <Switch>
          <Route path='/' exact render={() => <PayPage />} />
          <Route path='/details' exact render={() => <DetailsPage />} />
          <Route path='/success' exact render={() => <SuccessPage />} />
        </Switch>

      </Router>

    </div>
  );

};

export default App


