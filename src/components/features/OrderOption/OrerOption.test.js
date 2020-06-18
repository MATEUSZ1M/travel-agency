import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render correctly', () => {
    const component = shallow(<OrderOption name={'Lorem'} type={'text'} />);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('sholud render correct title name', () => {
    const expectedTitle = 'Name';
    const component = shallow(
      <OrderOption name={expectedTitle} type={'text'} />
    );

    const renderedTitle = component.find('.title').text();

    expect(renderedTitle).toEqual(expectedTitle);
  });

  const optionTypes = {
    dropdown: 'OrderOptionDropdown',
    icons: 'OrderOptionIcons',
    checkboxes: 'OrderOptionCheckboxes',
    number: 'OrderOptionNumber',
    text: 'OrderOptionText',
    date: 'OrderOptionDate',
  };

  const mockProps = {
    id: 'abc',
    name: 'Lorem',
    values: [
      {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
      {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
    ],
    required: false,
    currentValue: 'aaa',
    price: '50%',
    limits: {
      min: 0,
      max: 6,
    },
  };
  
  const mockPropsForType = {
    dropdown: {},
    icons: {},
    checkboxes: {currentValue: [mockProps.currentValue]},
    number: {currentValue: 1},
    text: {},
    date: {},
  };
  
  const testValue = mockProps.values[1].id;
  const testValueNumber = 3;

  for (let type in optionTypes) {
    describe(`Component OrderOption with type=${type}`, () => {
      /* test setup */
      let component;
      let subcomponent;
      let renderedSubcomponent;
      let mockSetOrderOption;
      
      beforeEach(() => {
        mockSetOrderOption = jest.fn(); 
        component = shallow(
          <OrderOption
            type={type}
            setOrderOption={mockSetOrderOption} 
            {...mockProps}
            {...mockPropsForType[type]}
          />
        );
        subcomponent = component.find(optionTypes[type]);
        renderedSubcomponent = subcomponent.dive();
      });

      /* common tests */
      it('passes dummy test', () => {
        expect(1).toBe(1);
        console.log(component.debug());
        console.log(subcomponent.debug());

      });

      it(`renders ${optionTypes[type]}`, () => {
        expect(subcomponent).toBeTruthy();
        expect(subcomponent.length).toBe(1);
      });

      /* type-specific tests */
      switch (type) {
        case 'dropdown': {
          /* tests for dropdown */
          it('contains select and options', () => {
            const select = renderedSubcomponent.find('select');
            expect(select.length).toBe(1);
          
            const emptyOption = select.find('option[value=""]').length;
            expect(emptyOption).toBe(1);
          
            const options = select.find('option').not('[value=""]');
            expect(options.length).toBe(mockProps.values.length);
            expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
            expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
          });

          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
          });

          break;
        }

        /*tests for icons */
        case 'icons' : {
          it('renders icons', () => {
            const icon = renderedSubcomponent.find('.icon');
            expect(icon).toBeTruthy();

            console.log('icons:',icon.debug());
          });

          it('should run SetOrderOption function on click', () => {
            renderedSubcomponent.find('icon').simulate('click');
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
          });

          break;
        }

        /*tests for checkboxes */
        case 'checkboxes': {
          it('should run setOrderOption function on change  ', () => {
            const checkbox = renderedSubcomponent.find('value').toEqual([ testValue ]);
            checkbox.simulate('change', {checked: true});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.currentValue]: testValue});
          });

          break;
        }
        
        /*tests for number */
        case 'number': {
          it('should render without crashing', () => {
            const number = renderedSubcomponent.find('.imputSmall');
            expect(number).toBeTruthy();
          });
          
          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('.imputSmall').simulate('change', {currentTarget: {value: testValueNumber}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
          });

          break;
        }

        /*tests for text */
        case 'text': {
          it('render without crashing', () => {
            const text = renderedSubcomponent.find('input');
            expect(text).toBeTruthy;
          });

          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValue}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
          });

          break;
        }

        /*tests for date */
        case 'date': {
          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('type="date"').simulate('change', {currentTarget: testValue});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
          });
          break;
        }
        
      }
    });
  }
});
