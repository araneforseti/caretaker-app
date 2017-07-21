import React, {Component} from 'react';
import EventGateway from '../../data/EventGateway';
import UserGateway from '../../data/UserGateway';

export var ContainerFor = (EventList) => class extends Component {
  constructor() {
    super();
    this.state = {
        events: []
    };
    EventGateway.subscribe(this.updateEvents);
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

  componentWillUnmount() {
    EventGateway.unsubscribe(this.updateEvents);
  }

  _onCreateEvent = (data) => {
    EventGateway.createNewEvent(data);
  }

  render() {
    return <EventList
      events={this.state.events}
      onCreateEvent={this._onCreateEvent}
    />;
  }
}
