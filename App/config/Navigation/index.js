import React, { Component } from 'react';
import {DrawerNavigator, NavigationActions} from 'react-navigation';
import UserGateway, { Permissions } from '../../data/UserGateway/';
import {adminRoutes, helperRoutes, config} from './config.js';

export default class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            userType: null,
            userName: null,
            userEmail: null
        }
    }

    componentDidMount() {
        const user = UserGateway.getCurrentUser();
        this.setState({
          userType: user.permission,
          userName: user.name,
          userEmail: user.identifier
        });
    }

    _onLogout = () => {
        UserGateway.logout();
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Login'})]
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        const userType = this.state.userType;
        let result = null;
        const screenProps = {
            routes: routesFor[userType],
            logout: this._onLogout,
            userName: this.state.userName,
            userEmail: this.state.userEmail
        }
        if(userType) {
            const Navigator = DrawerNavigator(routesFor[userType], config);
            result = <Navigator screenProps={screenProps} />;
        }
        return result;
    }
}

const routesFor = {
    [Permissions.FOCUS]: adminRoutes,
    [Permissions.ADMIN]: adminRoutes,
    [Permissions.HELPER]: helperRoutes
}
