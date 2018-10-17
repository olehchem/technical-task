import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import utils from '../../testUitls';

import PhoneList from '.';
import Spinner from '../Spinner';
import PhoneTile from '../PhoneTile';

import { PhoneListContainer } from './styled';

Enzyme.configure({ adapter: new Adapter() });

const onSelectMock = jest.fn();

function setup(customProps = {}) {
  const defaultProps = {
    isFetching: false,
    phones: null,
    fetchPhones: jest.fn(),
    onPhoneSelect: onSelectMock,
  };

  const props = {
    ...defaultProps,
    ...customProps,
  };

  const enzymeWrapper = mount(<PhoneList {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('<PhoneList /> component', () => {
  it('should call fetchPhones prop function on mount', () => {
    const { props } = setup();

    expect(props.fetchPhones).toBeCalled();
  });

  it('should render Spinner while phones are being fetched', () => {
    const { enzymeWrapper } = setup({ isFetching: true });

    expect(enzymeWrapper.find(Spinner).length).toBe(1);
  });

  it("shouldn't render Spinner", () => {
    const { enzymeWrapper } = setup({ isFetching: false });

    expect(enzymeWrapper.find(Spinner).length).toBe(0);
  });

  it('should render PhoneListContainer when phones are fetched', () => {
    const { enzymeWrapper } = setup({ phones: utils.phones });

    expect(enzymeWrapper.find(PhoneListContainer).length).toBe(1);
  });

  it("shouldn't render PhoneListContainer", () => {
    const { enzymeWrapper } = setup({ phones: null });

    expect(enzymeWrapper.find(PhoneListContainer).length).toBe(0);
  });

  it('should render all the phones', () => {
    const { enzymeWrapper } = setup({ phones: utils.phones });

    expect(enzymeWrapper.find(PhoneTile).length).toBe(utils.phones.length);
  });

  it('should pass props to PhoneTile all the phones', () => {
    const { enzymeWrapper } = setup({ phones: [utils.phone] });

    expect(enzymeWrapper.find(PhoneTile).props()).toEqual({
      ...utils.phone,
      onSelect: onSelectMock,
    });
  });
});
