import React, { Component } from 'react';
import UserGateway, { NotificationTypes } from '../../data/UserGateway/';
import ScreenWithToolbar from '../../components/shared/ScreenWithToolbar';
import { createNotificationTypes, User } from '../../data/UserGateway';

export default ContainerFor = (UserProfile) => class extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: this.process(new User())
        }
    }

    componentDidMount() {
        this.setState({
            currentUser: this.process(UserGateway.getCurrentUser())
        });
    }

    process(user) {
        let notificationTypes = createNotificationTypes();
        Object.keys(notificationTypes).forEach(key => {
            notificationTypes[key].value = user.notificationTypes.includes(key);
        })
        return user.set('notificationTypes', notificationTypes);
    }

    toggle = (key) => () => {
        let user = this.state.currentUser;
        const currentValue = user.notificationTypes[key].value
        user.notificationTypes[key].value = !currentValue;
        this.setState({currentUser: user});
    }

    render() {
        const user = this.state.currentUser;
        return <ScreenWithToolbar title='Profile' navigation={this.props.navigation}>
            <UserProfile
                name={user.name}
                email={user.identifier}
                phone={user.phone}
                notificationTypes={user.notificationTypes}
                notificationTriggers={user.notificationTriggers}
                toggle={this.toggle}
            />
        </ScreenWithToolbar>
    }
}