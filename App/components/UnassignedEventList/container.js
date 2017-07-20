import React from 'react';
import EventGateway from '../../data/EventGateway';

export default container = (List) => class extends React.Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    const events = EventGateway
        .getAll()
        .filter((event) => event.volunteerId == 'TBD');
    this.setState({events: events});
  }

  getUnassigned() {
    var groupedEvents = this.state.events.filter(function(event){ return event.volunteerId === 'TBD' });
    return groupedEvents;
  }

  render() {
    return <List events={this.getUnassigned()} />;
  }
}
