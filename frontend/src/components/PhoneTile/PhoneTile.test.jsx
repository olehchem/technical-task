import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PhoneTile from '.';
import { PhoneTileContainer, Image } from './styled';
import { PhoneName } from '../styled';

import utils from '../../testUitls';

Enzyme.configure({ adapter: new Adapter() });

function setup(customProps) {
  const defaultProps = {
    onSelect: jest.fn()
  };
  const props = {
    ...defaultProps,
    ...customProps,
  };
  const enzymeWrapper = mount(<PhoneTile {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('<PhoneTile /> component', () => {
  it('render self and subcomponents for a specific phone model', () => {
    const { enzymeWrapper } = setup(utils.phone);

    expect(enzymeWrapper.find(PhoneTileContainer).length).toBe(1);

    const ImageElement = enzymeWrapper.find(Image);
    expect(ImageElement.length).toBe(1);
    expect(ImageElement.props().src).toBe(utils.phone.image);

    const PhoneNameElement = enzymeWrapper.find(PhoneName);
    expect(PhoneNameElement.length).toBe(1);
    expect(PhoneNameElement.props().title).toBe(utils.phone.title);
    expect(PhoneNameElement.text()).toBe(utils.phone.title);
  });

  it('shuold call onSelect function with phoneId on container click', () => {
    const { enzymeWrapper, props } = setup({ ...utils.phone, onSelect: jest.fn() });

    const container = enzymeWrapper.find(PhoneTileContainer);
    container.simulate('click');

    expect(enzymeWrapper.find(PhoneTileContainer).length).toBe(1);
    expect(props.onSelect).toBeCalled();
    expect(props.onSelect).toBeCalledWith(utils.phone.id);
  });
});
