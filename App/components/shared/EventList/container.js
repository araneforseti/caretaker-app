import React from 'react';

export default container = (EventList) => class extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      selectedEvent: null
    };
  }

  _onPressItem = (eventId) => {
    let newState = this.state;
    newState.modalVisible = true;
    newState.selectedEvent = this.props.events.find((event) => event.id === eventId)
    this.setState(newState);
  };

  _onCloseModal = () => {
    let newState = this.state;
    newState.modalVisible = false;
    this.setState(newState);
  }

  render() {
    const {
      modalVisible,
      selectedEvent
    } = this.state;

    const {
      events
    } = this.props;

    return <EventList
      modalVisible={modalVisible}
      selectedEvent={selectedEvent}
      onPressItem={this._onPressItem}
      onCloseModal={this._onCloseModal}
      events={events}
    />;
  }
}
