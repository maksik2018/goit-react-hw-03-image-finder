// import PropTypes from 'prop-types';
// // import s from './Searchbar.module.css';

// function Searchbar({ onHandleSubmit, onSearchQueryChange, value }) {
//   return (
//     <header onSubmit={onHandleSubmit} className="Searchbar">
//   <form className="SearchForm">
//     <button type="submit" className="SearchForm__button">
//       <span className="SearchForm__buttonLabel">Search</span>
//     </button>

//     <input
//       className="SearchForm__input"
//       type="text"
//       autoComplete="off"
//       autoFocus
//       value={value}
//       onChange={onSearchQueryChange}
//       placeholder="Search images and photos"
//     />
//   </form>
// </header>
//   );
// }

// Searchbar.propTypes = {
//   onHandleSubmit: PropTypes.func.isRequired,
//   onSearchQueryChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };

// export default Searchbar;

import React from "react";
import PropTypes from 'prop-types';

function SearchBar({ onSubmit }) {
  const handleSearch = (e) => {
    e.preventDefault();
    onSubmit(e.target.elements.searchValue.value);
  };
  return (
    <header className="Searchbar">
      <form onSubmit={handleSearch} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          name="searchValue"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images"
        />
      </form>
    </header>
  );

  
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};


export default SearchBar;
