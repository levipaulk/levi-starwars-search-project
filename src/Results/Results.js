import React from 'react';
import IndividualResult from '../IndividualResult/IndividualResult';

function Result(props) {
  return (
    <div className="Result">
        <h3>{props.hello}</h3>
        <IndividualResult hello={props.hello} />
    </div>
  );
}

export default Result;