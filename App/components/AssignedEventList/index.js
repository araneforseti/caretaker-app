import React from 'react';
import { View } from 'react-native';
import EventList from '../shared/EventList';

import container from './container';
import styles from './styles';

export function  AssignedEventList({events}) {
  return <View style={styles.container}>
    <EventList events={events} />
  </View>;
}

export default container(AssignedEventList);
