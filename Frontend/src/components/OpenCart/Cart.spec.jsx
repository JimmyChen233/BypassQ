import * as React from 'react';
import { shallow } from 'enzyme';
import Cart from './Cart';

describe('cart component unit test', () => {
  it('test component render succeed', () => {
    const items = [
      {
        name: 'test item',
        price: 12.0,
        quantity: 3,
        img: '',
      },
    ];

    const element = shallow(<Cart items={items} />);
    expect(element.text()).toContain('Continue to Payment');
  });
});
