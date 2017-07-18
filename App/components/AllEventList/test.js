import React, {Component} from 'react';
import renderer from 'react-test-renderer';
import AllEventList from './index.js';
import UserGateway from '../../data/UserGateway';
import EventGateway from '../../data/EventGateway';

describe('AllEventList', () => {
    beforeEach(() => {
        UserGateway.login('sarah@emailprovider.com'); //todo: mock/stub gateways
    });

    it('should render correctly', () => {
        const list = renderer.create(
            <AllEventList />
        )

        expect(list).toMatchSnapshot();
    });

    it('should subscribe to updates from the event gateway', () => {
        const spy = jest.spyOn(EventGateway, 'subscribe');

        const list = renderer
            .create(<AllEventList />)
            .getInstance();

        expect(spy).toHaveBeenCalledWith(list.updateEvents);
    });

    it('should get all the events when first rendered', () => {
        const spy = jest.spyOn(EventGateway, 'getAll');

        const list = renderer
            .create(<AllEventList />)
            .getInstance();

        expect(spy).toHaveBeenCalled();
    });

    it('it should get each volunteer name from the user gateway', () => {
        const spy = jest.spyOn(UserGateway, 'getName');
        const events = EventGateway.getAll(); //todo: stub this out

        const list = renderer
            .create(<AllEventList />)
            .getInstance();

        events.forEach((event) => expect(spy).toHaveBeenCalledWith(event.volunteerId));
    });

    describe('_onCreateEvent', () => {
      it('should create an event through the gateway', () => {
        const spy = jest.spyOn(EventGateway, 'createNewEvent');
        const list = renderer
            .create(<AllEventList />)
            .getInstance();

          list._onCreateEvent({some: 'data'});

          expect(spy).toHaveBeenCalledWith({some: 'data'});
      })
    })
});
