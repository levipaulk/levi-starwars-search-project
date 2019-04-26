import React from 'react';
import ValidationError from '../validationError/validationError'
import PropTypes from 'prop-types';

export default class Search extends React.Component {
  state = {
    searchCategory: 'people',
    searchTerm: 'skywalker',
    searchTermValid: false,
    validationMessage: {
      searchTerm: '',
    }
  }

  updateSearchTerm = (searchTerm) => {
    this.setState({searchTerm}, () => this.validateSearchTerm(searchTerm))
  }

  validateSearchTerm(searchTerm) {
    let message = this.state.validationMessage.searchTerm;
    let hasError = false;
    searchTerm = searchTerm.trim();
    if(searchTerm.length === 0) {
      message = 'Must provide a Search Term';
      hasError = true;
    } else {
      message = '';
      hasError = false;
    }
    this.setState({
      searchTermValid: !hasError,
      validationMessage: {...this.state.validationMessage, searchTerm: message}
    })
  }

  updateSearchCategory = (searchCategory) => {
    this.setState({searchCategory})
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.apiGet(this.state.searchTerm, this.state.searchCategory)
  }

  render() {
    const categories = ['people', 'planets', 'films', 'species', 'starships', 'vehicles']
    const options = categories.map( category => 
      <option key={category} value={category}>
        {category}
      </option>)
    return (
      <div className="Search">
          <form onSubmit={e => this.submitHandler(e)}>
            <h3>Search for your favorite {this.state.searchCategory}</h3>
            <div className="searchTerm">
              <label>Search</label>
              <input type='text' id='search-input' onChange={e => this.updateSearchTerm(e.target.value)}/>
            </div>
            <ValidationError hasError={!this.state.searchTermValid} message={this.state.validationMessage.searchTerm}/>
            <div className="searchCategory">
              <label htmlFor='category-select'>Category</label>
              <select id='category-select' defaultValue={'people'} onChange={e => this.updateSearchCategory(e.target.value)}>
                {options}
              </select>
            </div>
            <div className="button">
              <button type='submit' disabled={!this.state.searchTermValid}>Search</button>
            </div>
          </form>
      </div>
    )
  }
}

Search.propTypes = {
    apiGet: PropTypes.func
}