import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchDeparture from '../../search/components/SearchDeparture';
import SearchArrival from '../../search/components/SearchArrival';
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
              <SearchDeparture />
              <ResultContainerDepart />
            </Route>
            <Route path="/arrival">
              <SearchArrival />
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

// const mapState = state => {
//   return {
//     a: state,
//   };
// };

export default connect(null, mapDispatch)(Main);
