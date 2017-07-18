import React, { Component } from 'react';
import UserGateway, { NotificationTypes } from '../../data/UserGateway/';
import ScreenWithToolbar from '../../components/shared/ScreenWithToolbar';
import { Settings, User } from '../../data/UserGateway';

export default ContainerFor = (UserProfile) => class extends Component {
    constructor() {
        super();
        const defaultUser = new User();
        this.state = {
            currentUser: defaultUser
        }
    }

    componentDidMount() {
        const user = UserGateway.getCurrentUser()
        this.setState({
            currentUser: user
        });
    }

    toggle = (key) => () => {
        let settings = this.state.currentUser.settings;
        const currentValue = settings[key].value
        settings[key].value = !currentValue;
        UserGateway.updateSettings(settings);
        this.setState({
            currentUser: this.state.currentUser.set('settings', settings)
        });
    }

    render() {
        const user = this.state.currentUser;
        return <ScreenWithToolbar title='Profile' navigation={this.props.navigation}>
            <UserProfile
                name={user.name}
                email={user.identifier}
                phone={user.phone}
                settings={user.settings}
                toggle={this.toggle}
            />
        </ScreenWithToolbar>
    }
}
