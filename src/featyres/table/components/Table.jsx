import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TableBodyDeparture from './departure/TableBodyDeparture';
import TableHead from './TableHead';
import TableBodyArrival from './arrival/TableBodyArrival';
import NotFound from './NotFound';
import * as selectors from '../table.selectors';
import '../styles/table.scss';

const Table = ({ arrival, departure }) => {
  return (
    <table className="table">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {departure.length === 0 ? (
              <NotFound />
            ) : (
              [<TableHead key={1} text={'Напрямок'} />, <TableBodyDeparture key={2} />]
            )}
          </Route>
          <Route exact path="/arrival">
            {arrival.length === 0 ? (
              <NotFound />
            ) : (
              [<TableHead key={1} text={'Прилітає з'} />, <TableBodyArrival key={2} />]
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    </table>
  );
};

const mapState = state => {
  return {
    arrival: selectors.arrivalSelector(state),
    departure: selectors.departureSelector(state),
  };
};

export default connect(mapState, null)(Table);
