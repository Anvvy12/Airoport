import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../styles/search.scss';

const Search = () => {
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
            />

            <button className="search-form-block__btn">знайти</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
