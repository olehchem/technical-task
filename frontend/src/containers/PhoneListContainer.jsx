import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PhoneList from '../components/PhoneList';

import { fetchPhones } from '../actions';
import { phonesListSelector, isPhonesFetching } from '../selectors';

const PhoneListContainer = props => <PhoneList {...props} />;

const mapStateToProps = state => ({
  isFetching: isPhonesFetching(state),
  phones: phonesListSelector(state),
});

const mapDispathToProps = dispatch => ({
  fetchPhones: () => dispatch(fetchPhones()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispathToProps,
  )(PhoneListContainer),
);
