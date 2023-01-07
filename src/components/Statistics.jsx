import React from "react";
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (<div className="counter__stat">
        <ul className="statistic">
            <li className="statItem">Good:{good}</li>
            <li className="statItem">Neutral:{neutral}</li>
            <li className="statItem">Bad:{bad}</li>
            {total > 0 && (<li className="statItem">Total:{total}</li>)}
            {total > 0 && (<li className="statItem">Positive Fidbak:{good === 0? "0%": positivePercentage}</li>)}
        </ul>
    </div>)
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
export default Statistics;
