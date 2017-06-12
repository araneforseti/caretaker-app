import React, {Component} from 'react';
import EventGateway from '../gateway.js';
import EventList from '../EventList.js';


export default class EventListContainer extends Component {
  constructor() {
    super();
    this.gateway = new EventGateway();
    this.state = {
      title: 'Upcoming Events',
      events: []
    };
  }

  componentDidMount() {
    this.setState({events: this.gateway.getAll()});
  }

  render() {
    return <EventList title={this.state.title} events={this.state.events} />;
  }
}
