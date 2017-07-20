import React, {Component} from 'react';
import renderer from 'react-test-renderer';
import {DrawerNavigator} from 'react-navigation';

import UserGateway, {Permissions} from '../../data/UserGateway/';
import Navigation from './index.js';
import {adminRoutes, helperRoutes, config} from './config.js';

describe('Navigation', () => {
    const FOCUS = 'sarah@emailprovider.com';
    const HELPER = 'austin@yeehaw.com';
    const ADMIN = 'caroline@woahdude.com';

    const login = {
      as(user) {
        UserGateway.login(user);
      }
    };

    beforeEach(() => {
        DrawerNavigator.mockReset();
        DrawerNavigator.mockReturnValue(MockDrawerNavigator)
    })

    it('snapshot', () => {
        login.as(HELPER);
        expect(renderer.create(<Navigation />)).toMatchSnapshot();
    })

    it('should get the current user', () => {
      const spy = jest.spyOn(UserGateway, 'getCurrentUser');

      renderer.create(<Navigation />)

      expect(spy).toHaveBeenCalled();
    })

    it('should get the permissions from the user', () => {
        login.as(HELPER);

        const navigation = renderer
            .create(<Navigation />)
            .getInstance();

        expect(navigation.state.userType).toBe(Permissions.HELPER);
    })

    it('should use the admin routes when the user is an admin', () => {
        login.as(ADMIN)
        const navigation = renderer
            .create(<Navigation />)
            .getInstance();

        expect(DrawerNavigator).toHaveBeenCalledWith(adminRoutes, config);
    })

    it('should use the admin routes when the user is a focus', () => {
        login.as(FOCUS);
        const navigation = renderer
            .create(<Navigation />)
            .getInstance();

        expect(DrawerNavigator).toHaveBeenCalledWith(adminRoutes, config);
    })

    it('should use the helper routes when the user is a helper', () => {
      login.as(HELPER);
      const navigation = renderer
          .create(<Navigation />)
          .getInstance();

      expect(DrawerNavigator).toHaveBeenCalledWith(helperRoutes, config);
    })

    it('should render null when the state is not set', () => {
        const navigation = renderer
            .create(<Navigation />)
            .getInstance();
        navigation.state.userType = null;

        expect(navigation.render()).toBe(null);
    })

})


class MockDrawerNavigator extends Component {
    render(){
        return (
            <div>Mock Drawer Navigator</div>
        );
    }
}
