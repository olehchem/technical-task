import PropTypes from 'prop-types';

export const PhoneType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
});

export const PhonesType = PropTypes.arrayOf(PhoneType);
