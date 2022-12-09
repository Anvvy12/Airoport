import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from '../../search/components/Search';
import ResultContainerDepart from '../../flights/components/ResultContainerDepart';
import ResultContainerArrival from '../../flights/components/ResultContainerArrival';
import CovidInfo from '../../covidInfo/components/CovidInfo';
import * as flightsActions from '../main.actions';

import '../styles/main.scss';

const Main = ({ getFlights }) => {
  useEffect(() => {
    getFlights();
  }, []);
  return (
    <main className="main">
      <div className="central-side">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Search />
              <ResultContainerDepart />
            </Route>
            <Route path="/arrival">
              <Search />
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
