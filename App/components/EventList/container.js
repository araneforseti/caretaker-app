import React, {Component} from 'react';
import EventGateway from '../../gateway/event.js';
import UserGateway from '../../gateway/user.js';

export var ContainerFor = (EventList) => class extends Component {
    constructor() {
        super();
        this.state = {
            events: [],
            visibleModal: false,
            selectedEvent: null,
        };
        EventGateway.subscribeToUpdates(this.updateEvents);
    }

    updateEvents = () => {
        let events = EventGateway.getAll();
        events.forEach((event) => event.volunteer = UserGateway.getName(event.volunteerId));
        let newState = Object.assign({}, this.state);
        newState.events = events;
        this.setState(newState);
    }

    componentDidMount() {
        this.updateEvents();
    }

    _onPressItem = (eventId) => {
        let newState = this.state;
        newState.visibleModal = true;
        newState.selectedEvent = newState.events.find((event) => event.id === eventId)
        this.setState(newState);
    };

    _onCloseModal = () => {
        let newState = this.state;
        newState.visibleModal = false;
        this.setState(newState);
    }

    render() {
        return <EventList
            events={this.state.events}
            visibleModal={this.state.visibleModal}
            selectedEvent={this.state.selectedEvent}
            onPressItem={this._onPressItem}
            onCloseModal={this._onCloseModal}
        />;
    }
}
