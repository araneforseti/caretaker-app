import React, {Component} from 'react';
import EventGateway from '../../gateway/event.js';
import UserGateway from '../../gateway/user.js';

export var ContainerFor = (EventList) => class extends Component {
    constructor() {
        super();
        this.state = {
            events: []
        };
    }

    componentDidMount() {
        let events = EventGateway.getAll()
        events.forEach((event) => event.volunteer = UserGateway.getName(event.volunteerId));
        this.setState({events: events});
    }

    render() {
        return <EventList events={this.state.events} />;
    }
}
