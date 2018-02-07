import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = {
    inputValue: '',
  }
  handleInputChange = (event) => {
    this.setState({inputValue: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({inputValue: ''});
  }
  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
          placeholder="Search"
          value={this.state.inputValue}
          onChange={this.handleInputChange} />
        </form>
      </div>
    )
  }
}

export default SearchBar;