import PropTypes from 'prop-types';
import { Fragment } from 'react';

export const FirstComponent = ({ message, number }) => {
  return (
    <>
      <h1>
        {message} React {number}
      </h1>
      {number === 30 && <h2>Hello world</h2>}
    </>
  );
};

FirstComponent.propTypes = {
  number: PropTypes.number,
};
