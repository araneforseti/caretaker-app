import React, {Component} from 'react';
import EventGateway from '../gateway.js';
import EventList from '../EventList.js';

export default class UnassignedEventListContainer extends Component {
  constructor() {
    super();
    this.gateway = new EventGateway();
    this.state = {
      title: 'Events Still Looking for People',
      events: []
    };
  }

  componentDidMount() {
    this.setState({events: this.gateway.getAll()});
  }

  getUnassigned() {
    var groupedEvents = this.state.events.filter(function(event){ return event.volunteer === 'TBD' });
    return groupedEvents;
  }

  render() {
    return <EventList title={this.state.title} events={this.getUnassigned()} />;
  }
}
