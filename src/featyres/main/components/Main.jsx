import React from 'react';
import Search from '../../search/components/Search';
import ResultContainerDepart from '../../flights/components/ResultContainerDepart';
import ResultContainerArrival from '../../flights/components/ResultContainerArrival';
import CovidInfo from '../../covidInfo/components/CovidInfo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/main.scss';

const Main = () => {
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

export default Main;
