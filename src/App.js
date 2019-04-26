import React from 'react';
import Search from './Search/Search';
import Results from './Results/Results';
import './App.css';

export default class App extends React.Component {
  state = {
    results: [],
    category: '',
    error: null,
  }

  componentDidMount() {
    const names = this.props.testdata.map(result => result.name)
    this.setState({
      results: names
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Star Wars Search</h1>
        </header>
        <main>
          <Search hello={'hello'}/>
          <Results hello={'hello'}/>
        </main>
      </div>
    );
  }
}
