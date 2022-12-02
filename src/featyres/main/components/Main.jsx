import React from 'react';
import Search from '../../search/components/Search';
import ResultContainer from '../../flights/components/ResultContainer';
import '../styles/main.scss';

const Main = () => {
  return (
    <main className="main">
      <div className="central-side">
        <Search />
        <ResultContainer />
      </div>
    </main>
  );
};

export default Main;
