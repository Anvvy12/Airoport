import React from 'react';
import Search from '../../search/components/Search';
import ResultContainer from '../../flights/components/ResultContainer';
import CovidInfo from '../../covidInfo/components/CovidInfo';
import '../styles/main.scss';

const Main = () => {
  return (
    <main className="main">
      <div className="central-side">
        <Search />
        <ResultContainer />
        <CovidInfo />
      </div>
    </main>
  );
};

export default Main;
