import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TableHeadDeparture from './departure/TableHeadDeparture';
import TableBodyDeparture from './departure/TableBodyDeparture';
import TableHeadArrival from './arrival/TableHeadArrival';
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
              [<TableHeadDeparture key={1} />, <TableBodyDeparture key={2} />]
            )}
          </Route>
          <Route exact path="/arrival">
            {arrival.length === 0 ? (
              <NotFound />
            ) : (
              [<TableHeadArrival key={1} />, <TableBodyArrival key={2} />]
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
