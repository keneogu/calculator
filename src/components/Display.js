import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="display">
    <h1 className="display-head">{result}</h1>
  </div>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
