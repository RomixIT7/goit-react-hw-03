import css from "./SearchBox.module.css";

const SearchBox = ({ searchContact, handleSearch }) => {
  return (
    <label className={css.searchLabel}>
      <span>Find contacts by name</span>
      <input
        className={css.searchInput}
        type="text"
        value={searchContact}
        onChange={handleSearch}
      />
    </label>
  );
};

export default SearchBox;
