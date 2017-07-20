import React from 'react';
import renderer from 'react-test-renderer';
import container from './container';

describe('EventList container', () => {
  let props;
  const component = () => renderer.create(React.createElement(container(MockEventList), props));

  beforeEach(() => {
    props = {
      events: undefined
    };
  });

  describe('_onPressItem', () => {
    const Jul_10_2017 = 1499662800000;
    const Jul_11_2017 = 1499749200000;

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

    beforeEach(() => {
      props.events = [eventA, eventB];
    });

    it('should make the modal visible', () => {
      let instance = component().getInstance();
      instance._onPressItem(2);
      expect(instance.state.modalVisible).toBe(true);
    });

    it('should select the event with the given id', () => {
      let instance = component().getInstance();
      instance._onPressItem(2);
      expect(instance.state.selectedEvent).toBe(eventB);
    });
  });

  describe('_onCloseModal', () => {
    it('should make the modal invisible', () => {
      let instance = component().getInstance();
      instance._onCloseModal();
      expect(instance.state.modalVisible).toBe(false);
    });
  });

});

function MockEventList(props) {
  return null;
}
