import React from 'react';
import Search from '../../search/components/Search';
import FlightsBlock from '../../flights/components/FlightsBlock';
import '../styles/main.scss';

const Main = () => {
  return (
    <main className="main">
      <div className="central-side">
        <Search />
        <FlightsBlock />
      </div>
    </main>
  );
};

export default Main;
