import React, { Component } from 'react';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    value: '',
  };
  handlerInput = e => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };
  handlerSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      return toast.error('Please, enter search query!');
    }
    this.props.onSubmit(this.state.value);
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handlerSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handlerInput}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;