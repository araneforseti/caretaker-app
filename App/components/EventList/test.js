import React, {Component} from 'react';
import renderer from 'react-test-renderer';
import EventList from './index.js';
import UserGateway from '../../data/UserGateway';
import EventGateway from '../../data/EventGateway';

describe('EventList', () => {
    beforeEach(() => {
        UserGateway.signIn('sarah@emailprovider.com'); //todo: mock/stub gateways
    });

    it('should render correctly', () => {
        const list = renderer.create(
            <EventList />
        )

        expect(list).toMatchSnapshot();
    });

    it('should subscribe to updates from the event gateway', () => {
        const spy = jest.spyOn(EventGateway, 'subscribe');

        const list = renderer
            .create(<EventList />)
            .getInstance();

        expect(spy).toHaveBeenCalledWith(list.updateEvents);
    });

    it('should get all the events when first rendered', () => {
        const spy = jest.spyOn(EventGateway, 'getAll');

        const list = renderer
            .create(<EventList />)
            .getInstance();

        expect(spy).toHaveBeenCalled();
    });

    it('it should get each volunteer name from the user gateway', () => {
        const spy = jest.spyOn(UserGateway, 'getName');
        const events = EventGateway.getAll(); //todo: stub this out

        const list = renderer
            .create(<EventList />)
            .getInstance();

        events.forEach((event) => expect(spy).toHaveBeenCalledWith(event.volunteerId));
    });

    describe('_onPressItem', () => {
        it('should make the modal visible', () => {
            const list = renderer
                .create(<EventList />)
                .getInstance();

            list._onPressItem(1);

            expect(list.state.visibleModal).toBe(true);
        });

        it('should set the selectedEvent', () => {
            const events = EventGateway.getAll(); //todo: stub this out
            const list = renderer
                .create(<EventList />)
                .getInstance();

            list._onPressItem(1);

            expect(list.state.selectedEvent).toBe(events[0]);
        });
    });

    describe('_onCloseModal', () => {
        it('should make the modal not visible', () => {
            const list = renderer
                .create(<EventList />)
                .getInstance();

            list._onCloseModal();

            expect(list.state.visibleModal).toBe(false);
        });
    });

    describe('_onCreateEvent', () => {
      it('should create an event through the gateway', () => {
        const spy = jest.spyOn(EventGateway, 'createNewEvent');
        const list = renderer
            .create(<EventList />)
            .getInstance();

          list._onCreateEvent({some: 'data'});

          expect(spy).toHaveBeenCalledWith({some: 'data'});
      })
    })
});
