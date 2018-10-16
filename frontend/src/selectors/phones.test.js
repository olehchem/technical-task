import * as selectors from '.';

describe('Phones selectors', () => {
  const ACTIVE_PHONE_ID = 'id';
  const ACTIVE_PHONE = {
    id: ACTIVE_PHONE_ID,
  };
  const PHONES = [{ id: 'some-id' }];
  const STATE = {
    phones: {
      list: [...PHONES, ACTIVE_PHONE],
      activePhoneId: ACTIVE_PHONE_ID,
      isFetching: false,
      isFetchingError: false,
    },
  };

  it('should select phonesList', () => {
    const expectedResult = STATE.phones.list;

    expect(selectors.phonesListSelector(STATE)).toEqual(expectedResult);
  });

  it('should select isPhonesFetching', () => {
    const expectedResult = STATE.phones.isFetching;

    expect(selectors.isPhonesFetching(STATE)).toEqual(expectedResult);
  });

  it('should select activePhoneId', () => {
    const expectedResult = STATE.phones.activePhoneId;

    expect(selectors.activePhoneIdSelector(STATE)).toEqual(expectedResult);
  });

  it('should select actviePhone', () => {
    expect(selectors.activePhoneSelector(STATE)).toEqual(ACTIVE_PHONE);
  });
});
