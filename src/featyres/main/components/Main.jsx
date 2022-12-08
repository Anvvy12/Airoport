import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../../search/components/Search';
import ResultContainerDepart from '../../flights/components/ResultContainerDepart';
import ResultContainerArrival from '../../flights/components/ResultContainerArrival';
import CovidInfo from '../../covidInfo/components/CovidInfo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as flightsActions from '../main.actions';

import '../styles/main.scss';

const Main = ({ getFlights }) => {
  useEffect(() => {
    console.log('fetch');
    getFlights();
  }, []);
  return (
    <main className="main">
      <div className="central-side">
        <Search />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <ResultContainerDepart />
            </Route>
            <Route path="/arrival">
              <ResultContainerArrival />
            </Route>
          </Switch>
        </BrowserRouter>
        <CovidInfo />
      </div>
    </main>
  );
};

const mapDispatch = {
  getFlights: flightsActions.fetchStartFlights,
};

export default connect(null, mapDispatch)(Main);
