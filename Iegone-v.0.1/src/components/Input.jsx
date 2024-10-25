import React from 'react'
import PropTypes from 'prop-types';

function Input({ label, type, color='default' }) {
  const colorClass = {
    primary: 'border border-blue-300',
    default: 'border border-gray-300 rounded-lg p-2 w-full',
  } 
  return (
    <div className='flex flex-col '>
      <label htmlFor="">{label}</label>
      <input className={`${colorClass[color]} h-10 rounded-md `} type={type} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Input
