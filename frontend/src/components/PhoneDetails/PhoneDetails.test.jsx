import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import utils from '../../testUitls';

import PhoneDetails from '.';
import Spinner from '../Spinner';

import { PhoneDetailsContainer, LargeImage } from './styled';
import { PhoneName, DetailItemLabel, DetailItemValue } from '../styled';

Enzyme.configure({ adapter: new Adapter() });

function setup(customProps = {}) {
  const defaultProps = {
    isFetching: false,
    phone: null,
    fetchPhones: jest.fn(),
    selectPhone: jest.fn(),
  };

  const props = {
    ...defaultProps,
    ...customProps,
  };

  const enzymeWrapper = mount(<PhoneDetails {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('<PhoneDetails /> component', () => {
  it('should call selectPhone and  fetchPhones on mount. Case when user visits details page directly', () => {
    const { props } = setup();

    expect(props.fetchPhones).toBeCalled();
    expect(props.selectPhone).toBeCalled();
  });

  it("shouldn't call selectPhone and fetchPhones on mount. Case when user clicks on phone tile", () => {
    const { props } = setup({ phone: utils.phone });

    expect(props.fetchPhones).not.toHaveBeenCalled();
    expect(props.selectPhone).not.toHaveBeenCalled();
  });

  it('should render Spinner', () => {
    const { enzymeWrapper } = setup({ isFetching: true });

    expect(enzymeWrapper.find(Spinner).length).toBe(1);
  });

  it("shouldn't render Spinner", () => {
    const { enzymeWrapper } = setup({ isFetching: false });

    expect(enzymeWrapper.find(Spinner).length).toBe(0);
  });

  it('should render PhoneDetails', () => {
    const { enzymeWrapper } = setup({ phone: utils.phone });

    expect(enzymeWrapper.find(PhoneDetailsContainer).length).toBe(1);

    expect(enzymeWrapper.find(LargeImage).props().src).toBe(utils.phone.image);

    expect(enzymeWrapper.find(PhoneName).text()).toBe(utils.phone.title);

    expect(
      enzymeWrapper
        .find(DetailItemLabel)
        .at(0)
        .text(),
    ).toBe(utils.phone.description);

    expect(
      enzymeWrapper
        .find(DetailItemLabel)
        .at(1)
        .text()
        .trim(),
    ).toBe('Price:');

    expect(
      enzymeWrapper
        .find(DetailItemValue)
        .at(0)
        .text(),
    ).toBe(`${utils.phone.price} $`);

    expect(
      enzymeWrapper
        .find(DetailItemLabel)
        .at(2)
        .text()
        .trim(),
    ).toBe('Color:');

    expect(
      enzymeWrapper
        .find(DetailItemValue)
        .at(1)
        .text(),
    ).toBe(utils.phone.color);

    expect(
      enzymeWrapper
        .find(DetailItemLabel)
        .at(3)
        .text()
        .trim(),
    ).toBe('RAM:');

    expect(
      enzymeWrapper
        .find(DetailItemValue)
        .at(2)
        .text(),
    ).toBe(utils.phone.ram);
  });

  it("shouldn't render PhoneDetails", () => {
    const { enzymeWrapper } = setup({ phone: null });

    expect(enzymeWrapper.find(PhoneDetailsContainer).length).toBe(0);
  });
});
