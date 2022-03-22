import React from 'react';
import { shallow } from 'enzyme';
import Modal from 'react-modal';
import CustomModal from './index';

describe('<CustomModal />', () => {
  it('should render a modal', () => {
    const wrapper = shallow(<CustomModal />);
    // console.log(wrapper.debug());
    expect(wrapper.find(Modal)).toHaveLength(1);
  });
});
