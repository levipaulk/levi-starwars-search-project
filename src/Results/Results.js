import React from 'react';
import IndividualResult from '../IndividualResult/IndividualResult';
import PropTypes from 'prop-types';

export default function Result(props) {
  return (
    <div className="results">
        <ul className="result-list">
        {props.results.map(result => {
          return (
            <li id={result}>
              <IndividualResult result={result}/>
            </li>)
        })}
        </ul>
        <div>
          {props.loading && <h4>Loading...</h4>}
          {props.noResults && <h4>No Results</h4>}
        </div>
    </div>
  );
}

Result.propTypes = {
    results: PropTypes.array,
    loading: PropTypes.bool,
    noResults: PropTypes.bool
}