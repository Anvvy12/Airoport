import React from 'react';
import TableHeadDeparture from './departure/TableHeadDeparture';
import TableBodyDeparture from './departure/TableBodyDeparture';
import TableHeadArrival from './arrival/TableHeadArrival';
import TableBodyArrival from './arrival/TableBodyArrival';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/table.scss';

const Table = () => {
  return (
    <table className="table">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <TableHeadDeparture />
            <TableBodyDeparture />
          </Route>
          <Route exact path="/arrival">
            <TableHeadArrival />
            <TableBodyArrival />
          </Route>
        </Switch>
      </BrowserRouter>
    </table>
  );
};

export default Table;
