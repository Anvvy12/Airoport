import React from 'react';
import Search from '../../search/components/Search';
import FlightsContainer from '../../flights/components/FlightsContainer';
import '../styles/main.scss';

const Main = () => {
  return (
    <main className="main">
      <div className="central-side">
        <Search />
        <FlightsContainer />
      </div>
    </main>
  );
};

export default Main;
