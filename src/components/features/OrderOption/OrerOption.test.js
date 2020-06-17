import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {

  it('should render correctly', () => {
    const component = shallow(<OrderOption name={'Lorem'} type={'text'}/>);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('sholud render correct title name', () => {
    const expectedTitle = 'Name';
    const component = shallow(<OrderOption name={expectedTitle} type={'text'} />);

    const renderedTitle = component.find('.title').text();

    expect(renderedTitle).toEqual(expectedTitle);
  });
});
