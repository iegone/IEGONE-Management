import React from 'react'
import PropTypes from 'prop-types';

const Button = ({ label, type, color = 'default' }) => {
  const colorClass = {
    primary: 'bg-blue-300',
    default: 'bg-gray-300',
  } 
  return (
    <button className={`${colorClass[color]} h-10 rounded-md `} type={type}>{label}</button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'default']),
};

export default Button;
