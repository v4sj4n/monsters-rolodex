import { Component } from 'react'
import './SearchBox.styles.css'

class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder, className } = this.props
    return (
      <input
      className={`search-box ${className}`}
      type="search"
        placeholder={'search for ' + placeholder}
        onChange={onChangeHandler}
      />
    )
  }
}

export default SearchBox
