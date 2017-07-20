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

  it('should not render the location when the event has no location', () => {
    event.location = undefined;
    expect(eventPage()).toMatchSnapshot();
  });

});
