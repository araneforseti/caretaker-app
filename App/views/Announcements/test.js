import React, {Component} from 'react';
import renderer from 'react-test-renderer';
import AnnouncementsGateway from '../../data/AnnouncementsGateway/';
import UserGateway from '../../data/UserGateway/';
import Announcements from './index.js';

describe('Announcements Screen', () => {

    beforeEach(() => {
        jest.resetAllMocks();
        UserGateway.signIn('sarah@emailprovider.com');

        Date.prototype.toDateString = jest.fn(() => 'fake date');
    });

    it('snapshot', () => {
        const tree = renderer.create(<Announcements />);

        expect(tree).toMatchSnapshot();
    })

    it('should get all announcements from the gateway', () => {
        const spy = jest.spyOn(AnnouncementsGateway, 'getAll');

        renderer.create(<Announcements />);

        expect(spy).toHaveBeenCalled();
    });

    it('should subscribe to the announcements gateway', () => {
        const spy = jest.spyOn(AnnouncementsGateway, 'subscribe');

        const announcements = renderer.create(<Announcements />).getInstance();

        expect(spy).toHaveBeenCalledWith(announcements.updateAnnouncements);
    });

    it('should update all the announcements', () => {
        const oneAnnouncement = [{id: 1, title: 'Announcement'}];
        const twoAnnouncements = [{id: 1, title: 'Announcement'}, {id: 2, title: 'Announcement'}];
        jest.spyOn(AnnouncementsGateway, 'getAll')
            .mockReturnValueOnce(oneAnnouncement)
            .mockReturnValueOnce(twoAnnouncements)
        const announcements = renderer.create(<Announcements />).getInstance();

        announcements.updateAnnouncements();

        expect(announcements.state.announcements).toEqual(twoAnnouncements);
    })

    it('should show an action button when the user is an admin or focus', () => {
        jest.spyOn(UserGateway, 'isAdmin')
            .mockReturnValue(true);

        const announcements = renderer.create(<Announcements />).getInstance();

        expect(announcements.state.isUserAdmin).toBe(true);
    });

    it('should add an announcement when the add announcement button is pressed', () => {
        const spy = jest.spyOn(AnnouncementsGateway, 'create');
        jest.spyOn(UserGateway, 'isAdmin')
            .mockReturnValue(true);
        const announcements = renderer.create(<Announcements />).getInstance();

        announcements._onAddAnnouncement();

        expect(spy).toHaveBeenCalledWith({some: 'data'});
    });

    it('should edit an announcement when the user is an admin', () => {
        const spy = jest.spyOn(window, 'alert');
        jest.spyOn(UserGateway, 'isAdmin')
            .mockReturnValue(true);
        const announcements = renderer.create(<Announcements />).getInstance();

        announcements._onEditAnnouncement();

        expect(spy).toHaveBeenCalledWith('announcement edited!');
    });

    it('should not edit an announcement when the user is not an admin', () => {
        const spy = jest.spyOn(window, 'alert');
        jest.spyOn(UserGateway, 'isAdmin')
            .mockReturnValue(false);
        const announcements = renderer.create(<Announcements />).getInstance();

        announcements._onEditAnnouncement();

        expect(spy).not.toHaveBeenCalled();
    })
})
