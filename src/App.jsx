import React from 'react';
import { Provider } from 'react-redux';
import Footer from './featyres/footer/components/Footer';
import Header from './featyres/header/components/header';
import Main from './featyres/main/components/Main';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="wrapper-container">
        <Main />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
