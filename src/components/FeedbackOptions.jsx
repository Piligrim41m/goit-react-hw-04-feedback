import React from "react";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  //   const onButtonClick = evt => {
  //   onLeaveFeedback(evt.target.dataset.name);
  // };
    return (
        <div style={{
                display: 'flex',
                gap:'10px'}}>
            {options.map(item => (
                <button
                    type="button"
                    name={item}
                    className="btn"
                    onClick={onLeaveFeedback}
                    key={item}
                >{item}</button>
           ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default FeedbackOptions