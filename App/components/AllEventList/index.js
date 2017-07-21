import React from 'react';
import { View } from 'react-native';
import { ContainerFor } from './container.js';
import EventList from '../shared/EventList';
import ActionButton from '../material-ui/ActionButton';

import styles from './styles';

class AllEventList extends React.Component {
  _onCreateEvent = () => {
    this.props.onCreateEvent({some: 'data'});
  }

  render() {
    return <View style={styles.container}>
      <EventList events={this.props.events} />
      <ActionButton onPress={this._onCreateEvent} />
    </View>;
  }
}

export default ContainerFor(AllEventList);
