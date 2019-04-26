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
    </div>
  );
}

Result.propTypes = {
    results: PropTypes.array
}