import React, {Component} from 'react';
import renderer from 'react-test-renderer';
import EventModal from './index.js';
import UserGateway from '../../../data/UserGateway';
import EventGateway from '../../../data/EventGateway';

describe('EventModal', () => {
    let modal;
    let modalInstance;
    let intiallyVisible;
    let event;
    let _onClose;

    beforeEach(() => {
        UserGateway.login('sarah@emailprovider.com'); //todo: mock/stub gateways
        EventGateway.getAll();//todo: mock/stub gateways

        intiallyVisible = false;
        event = {id: 1, date: 'July 1', time: '13:00-14:00', location: '6818 Austin Center Blvd, Austin, TX 78731', name: 'Chemotherapy', volunteerId: 'jack@coolwebsite.com', role: 'driver', description: ''};
        _onClose = jest.fn();

        modal = renderer
            .create(<EventModal
                        visible={intiallyVisible}
                        event={event}
                        onClose={_onClose} />);
        modalInstance = modal.getInstance();
    });

    it('should render correctly', () => {
        expect(modal).toMatchSnapshot();
    });

    it('should determine if a volunteer is needed', () => {
        event.volunteerId = 'TBD';

        expect(modalInstance.isVolunteerNeeded()).toBe(true);
    });

    it('should determine if a volunteer is not needed', () => {
        expect(modalInstance.isVolunteerNeeded()).toBe(false);
    });

    it('should check with the user gateway if the volunteer is the current user', () => {
        const spy = jest.spyOn(UserGateway, 'isSelf')
                        .mockReturnValue(true);

        expect(modalInstance.isVolunteerSelf()).toBe(true);
    });

    it('should check with user gateway if the volunteer is an admin', () => {
        const spy = jest.spyOn(UserGateway, 'isAdmin')
                        .mockReturnValue(true);

        expect(modalInstance.isVolunteerAdmin()).toBe(true);
    });

    xit('should not render if the event is not provided', () => {
        //todo: write this test in the parent component and move the functionality there
    });

    describe('_onPickUpEvent', () => {
        it('should update the event through the event gateway', () => {
            const spy = jest.spyOn(EventGateway, 'pickUpEvent');

            modalInstance._onPickUpEvent();

            expect(spy).toHaveBeenCalledWith(event.id, 'sarah@emailprovider.com');
        })
    });

    describe('_onDropEvent', () => {
        it('should update the event through the event gateway', () => {
            const spy = jest.spyOn(EventGateway, 'dropEvent');

            modalInstance._onDropEvent();

            expect(spy).toHaveBeenCalledWith(event.id);
        })
    });

    describe('_onEditEvent', () => {
        it('should alert because it hasnt really been implemented', () => {
            const spy = jest.spyOn(window, 'alert');

            modalInstance._onEditEvent();

            expect(spy).toHaveBeenCalledWith('edited!');
        });
    });

    describe('_onExportToCalendar', () => {
        it('should alert because it hasnt really been implemented', () => {
            const spy = jest.spyOn(window, 'alert');

            modalInstance._onExportToCalendar();

            expect(spy).toHaveBeenCalledWith('exported!');
        });
    });
});
