import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import UserGateway, { NotificationTypes, NotificationTriggers } from '../../data/UserGateway/';
import UserProfile from './index.js';
import { Record } from 'immutable';

describe('User Profile', () => {

    beforeEach(() => {
        UserGateway.login('s');
    });

    it('snapshot', () => {
        expect(renderer.create(<UserProfile />)).toMatchSnapshot();
    })

    it('should get the user settings from the gateway', () => {
        const profile = renderer.create(<UserProfile />).getInstance();
        expect(profile.state.currentUser.settings).toEqual({
            [NotificationTypes.PUSH]: {
                name: 'Push',
                value: true
            },
            [NotificationTypes.EMAIL]: {
                name: 'Email',
                value: false
            },
            [NotificationTypes.SMS]: {
                name: 'SMS',
                value: false
            },
            [NotificationTriggers.ANNOUNCEMENT]: {
                name: 'Announcements',
                value: true
            },
            [NotificationTriggers.EVENT]: {
                name: 'Events',
                value: false
            },
            [NotificationTriggers.EVENT_BY_ROLE]: {
                name: 'Events specific to your role',
                value: true
            }
        });
    })

    it('should toggle the notification types', () => {
        const profile = renderer.create(<UserProfile />).getInstance();

        profile.toggle(NotificationTypes.EMAIL)();

        expect(profile.state.currentUser.settings).toEqual({
            [NotificationTypes.PUSH]: {
                name: 'Push',
                value: true
            },
            [NotificationTypes.EMAIL]: {
                name: 'Email',
                value: true
            },
            [NotificationTypes.SMS]: {
                name: 'SMS',
                value: false
            },
            [NotificationTriggers.ANNOUNCEMENT]: {
                name: 'Announcements',
                value: true
            },
            [NotificationTriggers.EVENT]: {
                name: 'Events',
                value: false
            },
            [NotificationTriggers.EVENT_BY_ROLE]: {
                name: 'Events specific to your role',
                value: true
            }
        });
    })

    it('should update the user settings through the gateway', () => {
        const spy = jest.spyOn(UserGateway, 'updateSettings');
        const profile = renderer.create(<UserProfile />).getInstance();

        profile.toggle(NotificationTypes.EMAIL)();

        expect(spy).toHaveBeenCalledWith(profile.state.currentUser.settings);
    })
})
