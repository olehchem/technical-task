import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PhoneTile from '.';
import {
  PhoneTileContainer, Image, DetailsContainer, DetailItem,
} from './styled';
import {
  PhoneName, Divider, DetailItemLabel, DetailItemValue,
} from '../styled';

Enzyme.configure({ adapter: new Adapter() });

function setup(props) {
  const enzymeWrapper = mount(<PhoneTile {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('<PhoneTile /> component', () => {
  const phoneModel = {
    id: 'id-1',
    title: 'iPhone 7',
    description:
      'Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ',
    color: 'black',
    price: 1100,
    ram: '2 GB',
    image: 'https://i.ebayimg.com/images/g/2BsAAOSwphNa2sGV/s-l1600.jpg',
  };

  it('render self and subcomponents for a specific phone model', () => {
    const { enzymeWrapper } = setup({ ...phoneModel });

    expect(enzymeWrapper.find(PhoneTileContainer).length).toBe(1);

    const ImageElement = enzymeWrapper.find(Image);
    expect(ImageElement.length).toBe(1);
    expect(ImageElement.props().src).toBe(phoneModel.image);

    const PhoneNameElement = enzymeWrapper.find(PhoneName);
    expect(PhoneNameElement.length).toBe(1);
    expect(PhoneNameElement.props().title).toBe(phoneModel.title);
    expect(PhoneNameElement.text()).toBe(phoneModel.title);

    // and so on
  });

  it('shuold call onSelect function with phoneId on container click', () => {
    const { enzymeWrapper, props } = setup({ ...phoneModel, onSelect: jest.fn() });

    const container = enzymeWrapper.find(PhoneTileContainer);
    container.simulate('click');

    expect(enzymeWrapper.find(PhoneTileContainer).length).toBe(1);
    expect(props.onSelect.mock.calls.length).toBe(1);
    expect(props.onSelect).toBeCalledWith(phoneModel.id);
  });
});
