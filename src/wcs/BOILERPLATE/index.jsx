import PropTypes from 'prop-types';

export const BOILTERPLATE = ({
}) => {
  const containerClass = BOILTERPLATE.tagName;
  return (
    <div className={containerClass}>
      BOILERPLATE
    </div>);
}

BOILTERPLATE.propTypes = {
  prop: PropTypes.string,
};

BOILTERPLATE.tagName = 'boiler-plate';

BOILTERPLATE.observedAttributes = [];

