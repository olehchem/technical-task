import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ClipLoader from 'react-spinners/ClipLoader';
import Spinner from '.';
import { Overlay, LoaderWrapper } from './styled';

Enzyme.configure({ adapter: new Adapter() });

function setup(customProps) {
  const defaultProps = {
    color: undefined,
    size: undefined,
  };

  const props = {
    ...defaultProps,
    ...customProps,
  };

  const enzymeWrapper = mount(<Spinner {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('<Spinner /> component', () => {
  it('render self and subcomponents with default props', () => {
    const { enzymeWrapper } = setup();
    const props = {
      color: '#123abc',
      size: 100,
    };

    expect(enzymeWrapper.find(Overlay).length).toBe(1);
    expect(enzymeWrapper.find(LoaderWrapper).length).toBe(1);
    expect(enzymeWrapper.find(ClipLoader).length).toBe(1);

    const clipLoaderProps = enzymeWrapper.find(ClipLoader).props();

    expect(clipLoaderProps.color).toBe(props.color);
    expect(clipLoaderProps.size).toBe(props.size);
  });

  it('render with specific color', () => {
    const color = '#fff';
    const { enzymeWrapper } = setup({ color });

    const { color: clipLoaderColor } = enzymeWrapper.find(ClipLoader).props();

    expect(clipLoaderColor).toBe(color);
  });

  it('render with specific size', () => {
    const size = 300;
    const { enzymeWrapper } = setup({ size });

    const { size: clipLoaderSize } = enzymeWrapper.find(ClipLoader).props();

    expect(clipLoaderSize).toBe(size);
  });
});
