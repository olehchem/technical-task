import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PhoneDetails from '../components/PhoneDetails';

import { fetchPhones, selectPhone } from '../actions';
import { activePhoneSelector, isPhonesFetching } from '../selectors';

const PhoneDetailsContainer = props => <PhoneDetails {...props} />;

const mapStateToProps = state => ({
  isFetching: isPhonesFetching(state),
  phone: activePhoneSelector(state),
});

const mapDispathToProps = (dispatch, ownProps) => ({
  fetchPhones: () => dispatch(fetchPhones()),
  selectPhone: () => dispatch(selectPhone(ownProps.match.params.phoneId)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispathToProps,
  )(PhoneDetailsContainer),
);
