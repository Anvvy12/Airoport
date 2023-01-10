import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchField from '../../search/components/SearchField';
import ResultContainerDepart from '../../containers/components/ResultContainerDepart';
import ResultContainerArrival from '../../containers/components/ResultContainerArrival';
import CovidInfo from '../../covidInfo/components/CovidInfo';
import Spinner from '../../spinner/components/Spinner';
import * as flightsActions from '../main.actions';

import '../styles/main.scss';

const Main = ({ getFlights }) => {
  const [isFetching, serFeatching] = useState(true);

  useEffect(() => {
    getFlights();
    serFeatching(false);
  }, []);

  return (
    <main className="main">
      <div className="central-side">
        {isFetching ? (
          <Spinner />
        ) : (
          <>
            <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  <SearchField />
                  <ResultContainerDepart />
                </Route>
                <Route path="/arrival">
                  <SearchField />
                  <ResultContainerArrival />
                </Route>
              </Switch>
            </BrowserRouter>
            <CovidInfo />
          </>
        )}
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
