import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as searchActions from '../search.actions';
import * as searcSelectors from '../search.selectors.js';
import '../styles/search.scss';

const SearchDeparture = ({ getSertchValue }) => {
  const [serchParam, setSearchParam] = useState('');

  const handlChange = event => {
    setSearchParam(event.target.value);
  };

  const handleSearch = () => {
    getSertchValue(serchParam);
  };

  const submit = () => {};
  return (
    <div className="search-container">
      <div className="search-form-container">
        <form className="search-form" onSubmit={submit}>
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
  getSertchValue: searchActions.getSerachingFlights,
};

const mapState = state => {
  return {
    searchValue: searcSelectors.getValueForSearchSelector(state),
  };
};

export default connect(mapState, mapDispatch)(SearchDeparture);
