import React from 'react';
import { shallow } from 'enzyme';
import ItemExceedInform from './index';

describe('ItemExceedInform component unit test', () => {
  it('test ItemExceedINform component', () => {
    const component = shallow(<ItemExceedInform />);
    expect(component.text().includes('You cannot add more than 500 items.')).toBe(true);
  });
});
