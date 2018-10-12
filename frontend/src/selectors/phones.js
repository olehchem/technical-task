import { createSelector } from 'reselect';

const phonesSelector = state => state.phones;

export const phonesListSelector = createSelector(phonesSelector, phones => phones.list);
export const isPhonesFetching = createSelector(phonesSelector, phones => phones.isFetching);

export const activePhoneIdSelector = createSelector(phonesSelector, phones => phones.activePhoneId);

export const activePhoneSelector = createSelector(
  phonesListSelector,
  activePhoneIdSelector,
  (phones, activePhoneId) => (phones && activePhoneId ? phones.find(phone => phone.id === activePhoneId) : null),
);
