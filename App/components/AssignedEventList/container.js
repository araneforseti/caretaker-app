import React from 'react';
import EventGateway from '../../data/EventGateway';
import UserGateway from '../../data/UserGateway';

export default container = (List) => class extends React.Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
    this.currentUser = '';
  }

  componentDidMount() {
    const events = EventGateway
        .getAll()
        .filter((event) => UserGateway.isSelf(event.volunteerId))

    this.setState({events: events});
  }

  render() {
    return <List events={this.state.events} />;
  }
}
