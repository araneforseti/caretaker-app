import React from 'react';
import renderer from 'react-test-renderer';
import EventList from './EventList';

describe('<EventList />', () => {
  const Jul_10_2017 = 1499662800000;
  const Jul_11_2017 = 1499749200000;

  let props;
  const eventList = () => renderer.create(<EventList {...props} />);

  beforeEach(() => {
    const eventA = {
      id: 1,
      name: 'Chemotherapy',
      startDate: Jul_10_2017,
      endDate: Jul_11_2017,
      date: 'Jul 10',
      volunteer: 'The Dude'
    };
    const eventB = {
      id: 2,
      name: 'Toxicity Check',
      startDate: Jul_10_2017,
      endDate: Jul_11_2017,
      date: 'Jul 10',
      volunteer: 'Waluigi'
    };

    props = {
      events: [eventA, eventB],
      selectedEvent: eventB,
      modalVisible: true,
      onCloseModal: jest.fn(),
      onPressItem: jest.fn()
    };
  });

  it('should render correctly', () => {
    expect(eventList()).toMatchSnapshot();
  });

});
