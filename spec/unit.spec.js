import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Quantity from '../client/src/components/Quantity';

describe('Quantity Component', () => {
  test('Component Should Exist', () => {
    shallow(<Quantity />);
  });
  test('Counter should contain essential elements', () => {
    let wrapper = shallow(<Quantity />);
    expect(wrapper.find('#add')).to.have.lengthOf(1);
    expect(wrapper.find('#sub')).to.have.lengthOf(1);
    expect(wrapper.find('#counter')).to.have.lengthOf(1);
  });
  test('Counter should begin at "1"', () => {
    let wrapper = shallow(<Quantity />);
    expect(wrapper.find('#counter').text()).to.be.an("string");
    expect(wrapper.find('#counter').text()).to.be.equal("1");
  });
  test('Counter should Decrement Properly', () => {
    let wrapper = shallow(<Quantity />);
    wrapper.find('#sub').simulate('click');
    expect(wrapper.find('#counter').text()).to.be.equal('1');
    wrapper.find('#add').simulate('click');
    expect(wrapper.find('#counter').text()).to.be.equal('2');
    wrapper.find('#sub').simulate('click');
    expect(wrapper.find('#counter').text()).to.be.equal('1');
  });
  test('Should increment quantity by "1"', () => {
    let wrapper = shallow(<Quantity />);
    wrapper.find('#add').simulate('click');
    expect(wrapper.find('#counter').text()).to.be.equal('2');
    wrapper.find('#add').simulate('click');
    expect(wrapper.find('#counter').text()).to.be.equal('3');
  });
});