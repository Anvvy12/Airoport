import React from 'react';
import TableHead from './TableHead';
import TableBodyDeparture from './TableBodyDeparture';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/table.scss';
import TableBodyArrival from './TableBodyArrival';

const Table = () => {
  return (
    <table className="table">
      <TableHead />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <TableBodyDeparture />
          </Route>
          <Route exact path="/arrival">
            <TableBodyArrival />
          </Route>
        </Switch>
      </BrowserRouter>
    </table>
  );
};

export default Table;
