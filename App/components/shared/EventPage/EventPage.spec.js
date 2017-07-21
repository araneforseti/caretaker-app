import React from 'react';
import renderer from 'react-test-renderer';
import EventPage from './EventPage';

describe('<EventPage />', () => {
  let props;
  let event;
  const eventPage = () => renderer.create(<EventPage {...props} />);

  beforeEach(() => {
    event = {
      name: 'Chemotherapy',
      volunteer: 'East Jones',
      startDate: 1499613300000,
      endDate: 1499620500000,
      date: '01 Jul',
      location: '800 Rocky Rd, Citytown TX',
      description: 'The description is mighty.'
    };

    props = {
      event: event,
      onClose: jest.fn(),
      onAccept: jest.fn(),
      onDrop: jest.fn(),
      onEdit: jest.fn()
    };
  });

  it('should render correctly', () => {
    expect(eventPage()).toMatchSnapshot();
  });

  it('should not render the description when the event has no description', () => {
    event.description = undefined;
    expect(eventPage()).toMatchSnapshot();
  });

  it('should not render the date when the event has no start date', () => {
    event.startDate = undefined;
    expect(eventPage()).toMatchSnapshot();
  });

  it('should not render the volunteer when the event has no volunteer', () => {
    event.volunteer = undefined;
    expect(eventPage()).toMatchSnapshot();
  });

  it('should render the accept button when the event needs a volunteer', () => {
    event.volunteer = 'TBD';
    expect(eventPage()).toMatchSnapshot();
  });

  it('should not render the location when the event has no location', () => {
    event.location = undefined;
    expect(eventPage()).toMatchSnapshot();
  });

});
