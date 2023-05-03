import './SearchBox.styles.css'

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={'search for ' + placeholder}
    onChange={onChangeHandler}
  />
)

export default SearchBox
