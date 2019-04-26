import React from 'react';
import Search from './Search/Search';
import Results from './Results/Results';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

export default class App extends React.Component {
  state = {
    results: [],
    error: null,
    baseURL: "https://swapi.co/api/"
  }

  // componentDidMount() {
  //   const names = this.props.testdata.map(result => result.name)
  //   this.setState({
  //     results: names
  //   })
  // }

  apiGet = (searchTerm, searchCategory) => {
    console.log(searchTerm, searchCategory)
    fetch(this.state.baseURL+searchCategory+'/?search='+encodeURI(searchTerm))
    .then(res => {
      if (!res.ok) throw new Error("API fetch request did not succeed")
      return res.json()
    }).then(data => {
      console.log(data);
      const results = data.results.map(obj => obj.name)
      console.log(results)
      this.setState({
        results
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Star Wars Search</h1>
        </header>
        <main>
          <ErrorBoundary><Search apiGet={this.apiGet}/></ErrorBoundary>
          <ErrorBoundary><Results results={this.state.results}/></ErrorBoundary>
        </main>
      </div>
    );
  }
}
