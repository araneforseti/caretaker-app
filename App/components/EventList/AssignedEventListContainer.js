import React, {Component} from 'react';
import EventGateway from './gateway.js';
import EventList from './EventList.js';


export default class AssignedEventListContainer extends Component {
  constructor() {
    super();
    this.gateway = new EventGateway();
    this.state = {
      title: 'Assigned Upcoming Events',
      events: []
    };
    this.name = "Sarah"
  }

  componentDidMount() {
    this.setState({events: this.gateway.getAll()});
  }

  getAssignedTo(volunteerName) {
    var assignedEvents = this.state.events.filter(function(event){ return event.volunteer === volunteerName });
    return assignedEvents;
  }

  render() {
    return <EventList title={this.state.title} events={this.getAssignedTo(this.name)} />;
  }
}
