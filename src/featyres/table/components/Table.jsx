import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import '../styles/table.scss';

const Table = () => {
  return (
    <table className="table">
      <TableHead />
      <TableBody />
    </table>
  );
};

export default Table;
