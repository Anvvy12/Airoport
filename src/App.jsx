import React from 'react';
import Header from './featyres/header/components/Header';
import Footer from './featyres/footer/components/Footer';
import Main from './featyres/main/components/Main';

const App = () => {
  return (
    <>
      <Header />
      <div className="wrapper-container">
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default App;
