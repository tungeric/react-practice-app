import React from 'react';
import PatientIndex from './PatientIndex'

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      searchResults: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ searchText: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    let results = [];
    const endpoint = `https://private-211206-codingchallenge2.apiary-mock.com/persons/search?query=${this.state.searchText}`
    console.log("ENDPOINT: ", endpoint)
    fetch(endpoint)
      .then((blob) => blob.json())
      .then((data) => {
        results.push(...data.values)
      })
      .then(() => this.setState({ searchResults: results }));
  }

  render() {
    return(
      <div>
        <form className="search-form">
          <input type="text" className="search" placeholder="Search for your patients" onSubmit={this.handleSubmit} onChange={this.handleChange}></input>
          <div className="search-btn" onClick = {this.handleSubmit}>SEARCH</div>
        </form>
        <PatientIndex patients={this.state.searchResults}/>
      </div>
    )
  }
}

export default Search;