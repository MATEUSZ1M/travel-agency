import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  
  it('should generate correct link by id', () => {
    const expectedLink = '/trip/abc';
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} />);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should have correct alt && src', () => {
    const expectedSrc = 'image';
    const expectedAlt = 'name';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt}/>);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render without crashing', () => {
    const component = shallow(<TripSummary id='lorem' image='lorem' name='lorem' cost='lorem' days={2} />);
    expect(component).toBeTruthy();
  });

  it('should render correctly props: name, cost, days', () => {
    const expectedTitle = 'Lorem ipsum';
    const expectedCost = 'Lorem ipsum';
    const expectedDuration = 1;

    const component = shallow(<TripSummary name={expectedTitle} cost={expectedCost} days={expectedDuration} />);

    const renderedTitle = component.find('.title').text();
    const renderedCost = component.find('.details').text();

    expect(renderedTitle).toEqual(expectedTitle);
    expect(renderedCost).toEqual(`${expectedDuration} daysfrom ${expectedTitle}`);

    
  });

  // it('should render correct props: tags', () => {
  //   const tags = ['abc', 'acb', 'bac'];
  //   const component = shallow(<TripSummary tags={tags} />);

  //   expect(component.at(0).find('.tag').at(0).prop(tags)).toEqual(tags);
  //   // expect(component.find('.tag').prop('tag')).toEqual.at(1)(tags);
  //   // expect(component.find('.tag').prop('tag')).toEqual.at(2)(tags);
  // });

});

