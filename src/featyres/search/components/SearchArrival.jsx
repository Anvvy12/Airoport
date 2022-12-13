import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import * as searcSelectors from '../search.selectors';
import { connect } from 'react-redux';
import * as searchActions from '../search.actions';

import '../styles/search.scss';

const SearchArrival = ({ getSertchValue, searchValue }) => {
  const [serchParam, setSearchParam] = useState('');

  const handlChange = event => {
    setSearchParam(event.target.value);
  };

  const handleSearch = () => {
    getSertchValue(serchParam);
  };
  return (
    <div className="search-container">
      <div className="search-form-container">
        <form className="search-form">
          <label>
            <h2 className="search-form__title">пошук рейсу</h2>
          </label>
          <div className="search-form-block">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input
              className="search-form-block__input"
              type="text"
              placeholder="Номер рейсу або місто"
              value={serchParam}
              onChange={handlChange}
            />
            <button className="search-form-block__btn" onClick={handleSearch}>
              знайти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatch = {
  getSertchValue: searchActions.getSerachingValue,
};

const mapState = state => {
  return {
    searchValue: searcSelectors.getValueForSearchSelector(state),
  };
};

export default connect(mapState, mapDispatch)(SearchArrival);
