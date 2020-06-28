import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const mockProps = {
  title: 'Lorem Titlum',
  promoDescription: 'Lorem Descriptum',
};

beforeAll(() => {
  const utilsModule = jest.requireActual('../../../utils/formatTime.js');
  utilsModule.formatTime = jest.fn(seconds => seconds);
});

describe('Component HappyHourAd', () => {
  it('passes dummy test', () => {
    expect(1).toBe(1);
  });

  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('should render header and description', () => {
    const component = shallow(<HappyHourAd />);

    expect(component.exists(select.title)).toBe(true);
    expect(component.exists(select.promoDescription)).toBe(true);
  });

  it('should render title', () => {
    const component = shallow(<HappyHourAd title={mockProps.title} />);
    const renderedTitle = component.find('.title').text();
    const expectedTile = mockProps.title;

    expect(renderedTitle).toEqual(expectedTile);
  });
});
//TO DOOOO!
const trueDate = Date;
const mockDate = (customDate) =>
  class extends Date {
    constructor(...args) {
      if (args.length) {
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }
    static now() {
      return new Date(customDate).getTime();
    }
  };

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);
    jest.useFakeTimers();

    const component = shallow(<HappyHourAd {...mockProps} />);
    const newTime = new Date();
    
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delaySeconds * 1000);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
    jest.useRealTimers();
  });
};

const checkDescription = (time, expectedDescription) => {
  it(`should render correct promo description at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);


    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedText = component.find(select.promoDescription).text();
    expect(renderedText).toEqual(expectedDescription);

    global.Date = trueDate; 
  });
};

const checkDescriptionStart = (time) => {
  it(`should change time for description at ${time}`, () => {
    //TO DO ############################################
  }); 
};


describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});

describe('Component HappyHourAd with mocked Date and delay', () => {
  checkDescriptionAfterTime('11:57:58', 2, '120');
  checkDescriptionAfterTime('11:59:58', 1, '1');
  checkDescriptionAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 + '');
});

describe('Component HappyHourAd ', () => {
  checkDescription('11:57:58', '122');
  checkDescription('11:59:59', '1');
  checkDescription('13:00:00', 23 * 60 * 60 + '');
});

describe('Component HappyHourAd time=>text', () => {
  checkDescriptionStart('11:57:58', 2, '120');
  checkDescriptionStart('11:59:58', 1, '1');
  checkDescriptionStart('12:00:00', 60 * 60, 23 * 60 * 60 + '');
});
