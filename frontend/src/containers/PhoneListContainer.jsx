import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PhoneList from '../components/PhoneList';

import { phonesListSelector } from '../selectors';

const PhoneListContainer = props => <PhoneList {...props} />;

const mapStateToProps = state => ({ phones: phonesListSelector(state) });

const mapDispathToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispathToProps,
  )(PhoneListContainer),
);
